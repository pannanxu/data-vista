import { makeAutoObservable } from 'mobx';

class ConfigMap {
    
    id: string
    config: Record<string, any>

    constructor(id: string) {
        this.id = id;
        this.config = {};
        makeAutoObservable(this);
    }

    setName() {
        this.config.name = new Date().valueOf();
        this.id = new Date().valueOf().toString();
    }
}

class ConfigMapService {

    private config: Map<string, ConfigMap>

    constructor() {
        this.config = new Map<string, ConfigMap>();
        makeAutoObservable(this);
    }

    public createConfig() {
        const id = new Date().valueOf().toString();
        const configMap = new ConfigMap(id);
        configMap.setName();
        this.config.set(id, configMap);
    }
    
    public getConfigMap(id: string) {
        return this.config.get(id);
    }
}

export default ConfigMapService;