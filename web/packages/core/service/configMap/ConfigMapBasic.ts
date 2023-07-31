import {makeAutoObservable} from "mobx";

class ConfigMapBasic {

    width: number = 1
    height: number = 1
    top: number = 0
    left: number = 0

    constructor() {
        makeAutoObservable(this);
    }

    public setWidth(width: number) {
        this.width = width;
    }

    public setHeight(height: number) {
        this.height = height;
    }

    public setTop(top: number) {
        this.top = top;
    }

    public setLeft(left: number) {
        this.left = left;
    }
}

export default ConfigMapBasic;