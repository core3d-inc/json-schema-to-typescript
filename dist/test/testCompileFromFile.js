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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const ava_1 = __importDefault(require("ava"));
const src_1 = require("../src");
function run() {
    (0, ava_1.default)('compileFromFile should resolve refs from cwd option', (t) => __awaiter(this, void 0, void 0, function* () { return t.snapshot(yield (0, src_1.compileFromFile)('./test/resources/other/ReferencingType.json', { cwd: './test/resources' })); }));
    (0, ava_1.default)('compileFromFile should resolve refs from cwd option as yml', (t) => __awaiter(this, void 0, void 0, function* () { return t.snapshot(yield (0, src_1.compileFromFile)('./test/resources/other/ReferencingType.yml', { cwd: './test/resources' })); }));
}
exports.run = run;
//# sourceMappingURL=testCompileFromFile.js.map