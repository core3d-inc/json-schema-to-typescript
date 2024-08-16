export declare const input: {
    title: string;
    type: string;
    definitions: {
        enumFromDefinition: {
            type: string;
            enum: string[];
        };
    };
    properties: {
        stringEnum: {
            type: string;
            enum: string[];
        };
        impliedStringEnum: {
            enum: string[];
        };
        booleanEnum: {
            type: string;
            enum: boolean[];
        };
        impliedBooleanEnum: {
            enum: boolean[];
        };
        integerEnum: {
            type: string;
            enum: number[];
        };
        impliedIntegerEnum: {
            enum: number[];
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const options: {
    inferStringEnumKeysFromValues: boolean;
};
