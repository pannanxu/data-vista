import {makeAutoObservable} from "mobx";
import {Component} from "../../types";

class ComponentService {

    private readonly components: Record<string, Component>

    public get total() {
        return Object.keys(this.components).length;
    }

    public get all() {
        return Object.values(this.components);
    }

    constructor() {
        this.components = {};
        makeAutoObservable(this)
    }

    public getComponent(id: string) {
        return this.components[id]
    }

    public createComponent(component: Component) {
        this.components[component.id] = component;
    }

}

export default ComponentService;