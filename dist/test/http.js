"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithCache = void 0;
const fs_1 = require("fs");
const http_1 = require("http");
const https_1 = require("https");
const path_1 = require("path");
const CACHE_DIR = 'test/__fixtures__';
// Gets a URL, with read-through cache
// TODO: Pull this out into its own NPM module
function getWithCache(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultFromFilesystem = getFromFilesystem(url);
        if (resultFromFilesystem) {
            return resultFromFilesystem;
        }
        const resultFromNetwork = yield getFromNetwork(url);
        writeToFilesystem(url, resultFromNetwork);
        return resultFromNetwork;
    });
}
exports.getWithCache = getWithCache;
function getFromFilesystem(url) {
    const filepath = getFilepath(url);
    if (!(0, fs_1.existsSync)(filepath)) {
        return;
    }
    return JSON.parse((0, fs_1.readFileSync)(filepath, 'utf8'));
}
function getFilepath(url) {
    return (0, path_1.join)(__dirname, '../../', CACHE_DIR, url.replace(/[:\/\\]/g, '-'));
}
function writeToFilesystem(url, data) {
    const filepath = getFilepath(url);
    console.info(`Writing "${filepath} to filesystem...`);
    (0, fs_1.writeFileSync)(filepath, JSON.stringify(data, null, 2));
}
function getFromNetwork(url) {
    const f = url.startsWith('https://') ? https_1.get : http_1.get;
    return new Promise((resolve, reject) => {
        f(url, res => {
            const contentType = res.headers['content-type'];
            if (res.statusCode !== 200) {
                return reject(res);
            }
            else if (contentType && !/^application\/json/.test(contentType)) {
                return reject(new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`));
            }
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', chunk => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(rawData));
                }
                catch (e) {
                    reject(e);
                }
            });
        }).on('error', e => {
            reject(e);
        });
    });
}
//# sourceMappingURL=http.js.map