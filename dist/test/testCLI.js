"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const ava_1 = __importDefault(require("ava"));
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const rimraf = __importStar(require("rimraf"));
function run() {
    (0, ava_1.default)('pipe in, pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js', { encoding: 'utf-8' }).toString());
    });
    (0, ava_1.default)('pipe in (schema without ID), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('shx cat ./test/resources/ReferencedTypeWithoutID.json | node dist/src/cli.js', {
            encoding: 'utf-8',
        }).toString());
    });
    (0, ava_1.default)('file in (no flags), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (--input), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js --input ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (-i), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('file in (-i), unreachable definitions flag, pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/DefinitionsOnly.json --unreachableDefinitions').toString());
    });
    (0, ava_1.default)('file in (-i), style flags, pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/Enum.json --style.singleQuote --no-style.semi').toString());
    });
    (0, ava_1.default)('file in (-i), pipe out (absolute path)', t => {
        t.snapshot((0, child_process_1.execSync)(`node dist/src/cli.js -i ${__dirname}/../../test/resources/ReferencedType.json`).toString());
    });
    (0, ava_1.default)('file in (yaml), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js ./test/resources/Schema.yaml').toString());
    });
    (0, ava_1.default)('pipe in, file out (--output)', t => {
        (0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js --output ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('pipe in, file out (-o)', t => {
        (0, child_process_1.execSync)('shx cat ./test/resources/ReferencedType.json | node dist/src/cli.js -o ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (no flags), file out (no flags)', t => {
        (0, child_process_1.execSync)('node dist/src/cli.js ./test/resources/ReferencedType.json ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (-i), file out (-o)', t => {
        (0, child_process_1.execSync)('node dist/src/cli.js -i ./test/resources/ReferencedType.json -o ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('file in (--input), file out (--output)', t => {
        (0, child_process_1.execSync)('node dist/src/cli.js --input ./test/resources/ReferencedType.json --output ./ReferencedType.d.ts');
        t.snapshot((0, fs_1.readFileSync)('./ReferencedType.d.ts', 'utf-8'));
        (0, fs_1.unlinkSync)('./ReferencedType.d.ts');
    });
    (0, ava_1.default)('--unknownAny', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js --unknownAny=false --input ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('--additionalProperties', t => {
        t.snapshot((0, child_process_1.execSync)('node dist/src/cli.js --additionalProperties=false --input ./test/resources/ReferencedType.json').toString());
    });
    (0, ava_1.default)('files in (-i), files out (-o)', t => {
        (0, child_process_1.execSync)(`node dist/src/cli.js -i "./test/resources/MultiSchema/**/*.{json,yaml,yml}" -o ./test/resources/MultiSchema/out`);
        (0, fs_1.readdirSync)('./test/resources/MultiSchema/out').forEach(f => {
            const path = `./test/resources/MultiSchema/out/${f}`;
            t.snapshot(path);
            t.snapshot((0, fs_1.readFileSync)(path, 'utf-8'));
            (0, fs_1.unlinkSync)(path);
        });
        rimraf.sync('./test/resources/MultiSchema/out');
    });
    (0, ava_1.default)('files in (-i), pipe out', t => {
        t.snapshot((0, child_process_1.execSync)(`node dist/src/cli.js -i "./test/resources/MultiSchema/**/*.{json,yaml,yml}"`).toString());
    });
    (0, ava_1.default)('files in (-i), files out (-o) nested dir does not exist', t => {
        (0, child_process_1.execSync)(`node dist/src/cli.js -i "./test/resources/MultiSchema/**/*.{json,yaml,yml}" -o ./test/resources/MultiSchema/foo/bar/out`);
        (0, fs_1.readdirSync)('./test/resources/MultiSchema/foo/bar/out').forEach(f => {
            const path = `./test/resources/MultiSchema/foo/bar/out/${f}`;
            t.snapshot(path);
            t.snapshot((0, fs_1.readFileSync)(path, 'utf-8'));
            (0, fs_1.unlinkSync)(path);
        });
        rimraf.sync('./test/resources/MultiSchema/foo');
    });
    (0, ava_1.default)('files in (-i), files out (-o) matching nested dir', t => {
        (0, child_process_1.execSync)(`node dist/src/cli.js -i "./test/resources/../../test/resources/MultiSchema2/" -o ./test/resources/MultiSchema2/out`);
        getPaths('./test/resources/MultiSchema2/out').forEach(file => {
            t.snapshot(file);
            t.snapshot((0, fs_1.readFileSync)(file, 'utf-8'));
            (0, fs_1.unlinkSync)(file);
        });
        rimraf.sync('./test/resources/MultiSchema2/out');
    });
}
exports.run = run;
function getPaths(path, paths = []) {
    if ((0, fs_1.existsSync)(path) && (0, fs_1.lstatSync)(path).isDirectory()) {
        (0, fs_1.readdirSync)((0, path_1.resolve)(path)).forEach(item => getPaths(path_1.posix.join(path_1.posix.normalize(path), item), paths));
    }
    else {
        paths.push(path);
    }
    // sort paths to ensure a stable order across environments
    return paths.sort((a, b) => a.localeCompare(b));
}
//# sourceMappingURL=testCLI.js.map