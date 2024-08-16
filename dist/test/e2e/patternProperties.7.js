"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// @see https://github.com/bcherny/json-schema-to-typescript/issues/546
exports.input = {
    type: 'object',
    patternProperties: {
        '^[a-z][a-z0-9-]*/[a-z][a-z0-9-]*$': {
            type: 'string',
        },
    },
};
//# sourceMappingURL=patternProperties.7.js.map