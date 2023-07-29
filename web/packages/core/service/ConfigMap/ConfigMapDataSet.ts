import {makeAutoObservable} from "mobx";

class ConfigMapDataSet {

    id?: string;

    constructor() {
        makeAutoObservable(this);
    }

}

export default ConfigMapDataSet;