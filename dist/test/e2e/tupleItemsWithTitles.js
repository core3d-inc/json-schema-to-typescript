"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = {
    additionalItems: false,
    items: [
        {
            properties: {
                foo: {
                    type: 'string',
                },
            },
            title: 'Foo',
            type: 'object',
        },
        {
            properties: {
                bar: {
                    type: 'string',
                },
            },
            title: 'Bar',
            type: 'object',
        },
    ],
    title: 'TupleFooBar',
    type: 'array',
};
//# sourceMappingURL=tupleItemsWithTitles.js.map