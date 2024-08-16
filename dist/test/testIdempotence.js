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
const lodash_1 = require("lodash");
const src_1 = require("../src");
function run() {
    const SCHEMA = {
        type: 'object',
        properties: {
            firstName: {
                type: 'string',
            },
        },
        required: ['firstName'],
    };
    (0, ava_1.default)('compile() should not mutate its input', (t) => __awaiter(this, void 0, void 0, function* () {
        const before = (0, lodash_1.cloneDeep)(SCHEMA);
        yield (0, src_1.compile)(SCHEMA, 'A');
        t.deepEqual(before, SCHEMA);
    }));
    (0, ava_1.default)('compile() should be idempotent', (t) => __awaiter(this, void 0, void 0, function* () {
        const a = yield (0, src_1.compile)(SCHEMA, 'A');
        const b = yield (0, src_1.compile)(SCHEMA, 'A');
        t.deepEqual(a, b);
    }));
}
exports.run = run;
//# sourceMappingURL=testIdempotence.js.map