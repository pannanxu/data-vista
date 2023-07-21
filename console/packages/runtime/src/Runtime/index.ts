import Example from './example.tsx'

interface RuntimeI {
    readonly version: string;
}

class Runtime implements RuntimeI {
    readonly version: string = "1.0.0";
}


export {
    Runtime,
    Example
}