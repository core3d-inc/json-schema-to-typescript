"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testCLI_1 = require("./testCLI");
const testCompileFromFile_1 = require("./testCompileFromFile");
const testE2E_1 = require("./testE2E");
const testIdempotence_1 = require("./testIdempotence");
const testLinker_1 = require("./testLinker");
const testNormalizer_1 = require("./testNormalizer");
const testUtils_1 = require("./testUtils");
(0, testE2E_1.run)();
if (!(0, testE2E_1.hasOnly)()) {
    (0, testCompileFromFile_1.run)();
    (0, testCLI_1.run)();
    (0, testIdempotence_1.run)();
    (0, testLinker_1.run)();
    (0, testNormalizer_1.run)();
    (0, testUtils_1.run)();
}
//# sourceMappingURL=test.js.map