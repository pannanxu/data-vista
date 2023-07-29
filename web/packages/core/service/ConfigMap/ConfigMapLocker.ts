import {makeAutoObservable} from "mobx";

/**
 * 锁定
 */
class ConfigMapLocker {

    private lock: boolean = false;

    public get isLock() {
        return this.lock;
    }

    constructor() {
        makeAutoObservable(this);
    }

    public toggleLock() {
        this.lock = !this.lock;
    }
}


export default ConfigMapLocker;