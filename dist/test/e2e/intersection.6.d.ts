export declare const input: {
    oneOf: {
        $ref: string;
    }[];
    definitions: {
        Thing: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
            required: string[];
        };
        Vehicle: {
            type: string;
            allOf: {
                $ref: string;
            }[];
            properties: {
                year: {
                    type: string;
                };
            };
            required: string[];
        };
        Car: {
            type: string;
            allOf: {
                $ref: string;
            }[];
            properties: {
                numDoors: {
                    type: string;
                };
            };
            required: string[];
        };
        Truck: {
            type: string;
            allOf: {
                $ref: string;
            }[];
            properties: {
                numAxles: {
                    type: string;
                };
            };
            required: string[];
        };
    };
};
