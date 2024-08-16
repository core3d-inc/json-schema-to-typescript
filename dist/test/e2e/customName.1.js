"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.input = void 0;
exports.input = {
    type: 'object',
    id: 'FooId',
    title: 'FooTitle',
    definitions: {
        defaa: { id: 'defaa-id' },
        defab: { id: 'defab-id' },
    },
    properties: {
        propaaa: { $ref: '#/definitions/defaa' },
        propaab: { $ref: '#/definitions/defaa' },
        propbbb: { id: 'propbbb-id', title: 'propbbb-title' },
    },
};
exports.options = {
    customName: (_schema, keyName) => {
        if (!keyName)
            return undefined; // Fallback to default naming
        return 'CustomPrefix_' + keyName;
    },
};
//# sourceMappingURL=customName.1.js.map