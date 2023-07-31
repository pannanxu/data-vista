import {makeAutoObservable} from "mobx";

/**
 * 组合
 */
class ConfigMapCombiner {

    private group?: string;
    private combine: boolean;

    public get isCombine() {
        return this.combine;
    }

    public get combineName() {
        return this.group;
    }

    constructor() {
        this.group = undefined;
        this.combine = false;
        makeAutoObservable(this);
    }

    public toggleCombine() {
        this.combine = !this.combine;
    }
}


export default ConfigMapCombiner;