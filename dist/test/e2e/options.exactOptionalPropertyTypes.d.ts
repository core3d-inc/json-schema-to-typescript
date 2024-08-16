export declare const input: {
    title: string;
    type: string;
    properties: {
        maybe: {
            type: string;
        };
        complex: {
            type: string;
            properties: {
                maybe: {
                    type: string;
                };
            };
            additionalProperties: {
                title: string;
                type: string;
                properties: {
                    maybe: {
                        type: string;
                    };
                };
            };
        };
    };
    additionalProperties: {
        type: string;
    };
};
export declare const options: {
    exactOptionalPropertyTypes: boolean;
};
