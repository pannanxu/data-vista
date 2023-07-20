export interface ComponentsI {
    readonly version: string
}

class Components implements ComponentsI {
    readonly version: string = "1.0.0";
}


export default Components;