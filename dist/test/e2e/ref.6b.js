"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    title: 'Referencing Combined',
    type: 'object',
    properties: {
        foo: {
            $ref: 'test/resources/ReferencedCombinationType.json',
        },
    },
    required: ['foo'],
    additionalProperties: false,
};
exports.options = {
    declareExternallyReferenced: false,
};
//# sourceMappingURL=ref.6b.js.map