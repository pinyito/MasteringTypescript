interface Chicken{
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
};

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2
};

/**
 * =>Realtime compilation - watch
 * =>Compiling multiple files in a given directory - tsc
 * =>Define particular files to be compiled - file
 * =>include & exclude
 * =>Define the destination directory for compiled JS files - outdir
 * =>Define the JS version - target
 * =>Complain for implicit any types - noImplicitAny
 * =>Strict no checks
 * =>noOmmitOnError - sounds a good one
 */