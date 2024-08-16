export declare const input: {
    type: string;
    oneOf: {
        $ref: string;
    }[];
    definitions: {
        A: {
            type: string;
            allOf: {
                $ref: string;
            }[];
            properties: {
                b: {
                    $ref: string;
                };
            };
            additionalProperties: boolean;
        };
        B: {
            type: string;
            allOf: {
                $ref: string;
            }[];
            properties: {
                x: {
                    type: string;
                };
            };
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
