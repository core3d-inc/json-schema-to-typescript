"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
// From https://github.com/bcherny/json-schema-to-typescript/issues/597
exports.input = {
    oneOf: [{ $ref: '#/definitions/Car' }, { $ref: '#/definitions/Truck' }],
    definitions: {
        Thing: {
            type: 'object',
            properties: {
                name: { type: 'string' },
            },
            required: ['name'],
        },
        Vehicle: {
            type: 'object',
            allOf: [{ $ref: '#/definitions/Thing' }],
            properties: {
                year: { type: 'integer' },
            },
            required: ['year'],
        },
        Car: {
            type: 'object',
            allOf: [{ $ref: '#/definitions/Vehicle' }],
            properties: {
                numDoors: { type: 'integer' },
            },
            required: ['numDoors'],
        },
        Truck: {
            type: 'object',
            allOf: [{ $ref: '#/definitions/Vehicle' }],
            properties: {
                numAxles: { type: 'integer' },
            },
            required: ['numAxles'],
        },
    },
};
//# sourceMappingURL=intersection.6.js.map