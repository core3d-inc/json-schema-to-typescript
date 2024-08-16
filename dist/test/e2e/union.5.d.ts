export declare const input: {
    type: string;
    oneOf: {
        $ref: string;
    }[];
    definitions: {
        A: {
            oneOf: {
                $ref: string;
            }[];
            additionalProperties: boolean;
        };
        B: {
            type: string;
            oneOf: {
                $ref: string;
            }[];
            additionalProperties: boolean;
        };
        C: {
            type: string;
            properties: {
                c: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
        D: {
            type: string;
            properties: {
                d: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
    };
};
