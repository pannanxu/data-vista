

interface RuntimeI {
    readonly version: string;
}

class Runtime implements RuntimeI {
    readonly version: string = "1.0.0";
}


export default Runtime;