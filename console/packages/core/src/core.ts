export interface CoreI {
    readonly version: string;
}

class Core implements CoreI {
    readonly version: string = "1.0";

}

export default Core;