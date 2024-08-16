export declare const input: {
    title: string;
    enum: (string | number[] | {
        type: string;
        foo?: undefined;
    } | {
        foo: number;
        type?: undefined;
    } | {
        foo: {
            bar: string;
        };
        type?: undefined;
    } | {
        foo: number[];
    }[])[];
};
