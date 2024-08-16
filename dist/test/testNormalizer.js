"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const ava_1 = __importDefault(require("ava"));
const fs_1 = require("fs");
const path_1 = require("path");
const src_1 = require("../src");
const linker_1 = require("../src/linker");
const normalizer_1 = require("../src/normalizer");
const normalizerDir = __dirname + '/../../test/normalizer';
function run() {
    (0, fs_1.readdirSync)(normalizerDir)
        .filter(_ => /^.*\.json$/.test(_))
        .map(_ => (0, path_1.join)(normalizerDir, _))
        .map(_ => [_, require(_)])
        .forEach(([filename, json]) => {
        (0, ava_1.default)(json.name, t => {
            var _a;
            const normalized = (0, normalizer_1.normalize)((0, linker_1.link)(json.in), new WeakMap(), filename, (_a = json.options) !== null && _a !== void 0 ? _a : src_1.DEFAULT_OPTIONS);
            t.deepEqual(json.out, normalized);
        });
    });
}
exports.run = run;
//# sourceMappingURL=testNormalizer.js.map