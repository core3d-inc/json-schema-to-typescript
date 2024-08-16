"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    type: 'object',
    properties: {
        foo: {
            type: 'array',
            items: {
                type: 'string',
                enum: ['BAR', 'BAZ'],
                enumNames: ['bar', 'baz'],
                tsEnumNames: ['BAR', 'BAZ'],
            },
        },
        title: 'foo',
    },
};
//# sourceMappingURL=enumInArray.js.map