export declare const input: {
    type: string;
    oneOf: {
        $ref: string;
    }[];
    definitions: {
        A: {
            type: string;
            allOf: ({
                $ref: string;
                properties?: undefined;
            } | {
                properties: {
                    b: {
                        $ref: string;
                    };
                };
                $ref?: undefined;
            })[];
            additionalProperties: boolean;
        };
        B: {
            type: string;
            allOf: ({
                $ref: string;
                properties?: undefined;
            } | {
                properties: {
                    x: {
                        type: string;
                    };
                };
                $ref?: undefined;
            })[];
            additionalProperties: boolean;
        };
        Base: {
            type: string;
            properties: {
                y: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
    };
};
