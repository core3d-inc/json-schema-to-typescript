export declare const input: {
    $schema: string;
    title: string;
    type: string;
    additionalProperties: boolean;
    properties: {
        neighborhood: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
    $defs: {
        baseType: {
            title: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        person: {
            title: string;
            $ref: string;
            type: string;
            unevaluatedProperties: boolean;
            properties: {
                age: {
                    type: string;
                };
            };
        };
    };
};
