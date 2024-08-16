"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'ExactOptionalPropertyTypes',
    type: 'object',
    properties: {
        maybe: {
            type: 'string',
        },
        complex: {
            type: 'object',
            properties: {
                maybe: {
                    type: 'string',
                },
            },
            additionalProperties: {
                title: 'Leaf',
                type: 'object',
                properties: {
                    maybe: {
                        type: 'string',
                    },
                },
            },
        },
    },
    additionalProperties: {
        type: 'string',
    }
};
exports.options = {
    exactOptionalPropertyTypes: true,
};
//# sourceMappingURL=options.exactOptionalPropertyTypes.js.map