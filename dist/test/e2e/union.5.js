"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    oneOf: [{ $ref: '#/definitions/A' }, { $ref: '#/definitions/B' }],
    definitions: {
        A: {
            oneOf: [
                {
                    $ref: '#/definitions/C',
                },
                {
                    $ref: '#/definitions/D',
                },
            ],
            additionalProperties: false,
        },
        B: {
            type: 'object',
            oneOf: [
                {
                    $ref: '#/definitions/C',
                },
                {
                    $ref: '#/definitions/D',
                },
            ],
            additionalProperties: false,
        },
        C: {
            type: 'object',
            properties: {
                c: { type: 'string' },
            },
            additionalProperties: false,
        },
        D: {
            type: 'object',
            properties: {
                d: { type: 'string' },
            },
            additionalProperties: false,
        },
    },
};
//# sourceMappingURL=union.5.js.map