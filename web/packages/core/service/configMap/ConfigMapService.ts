import {makeAutoObservable} from 'mobx';
import ConfigMapLocker from "./ConfigMapLocker";
import ConfigMapCombiner from './ConfigMapCombiner';
import ConfigMapBasic from './ConfigMapBasic';
import ConfigMapDataSet from './ConfigMapDataSet';
import ConfigMapRepository from '../../repository/ConfigMapRepository';

type AdditionalInfo = Record<string, any>

class ComponentConfigMap {

    readonly componentId: string
    displayName: string
    basic: ConfigMapBasic
    dataset?: ConfigMapDataSet
    locker: ConfigMapLocker
    combiner: ConfigMapCombiner
    additionalInfo: AdditionalInfo

    constructor(componentId: string) {
        this.componentId = componentId;
        this.displayName = componentId;
        this.basic = new ConfigMapBasic();
        this.dataset = new ConfigMapDataSet();
        this.locker = new ConfigMapLocker();
        this.combiner = new ConfigMapCombiner();
        this.additionalInfo = {};
        makeAutoObservable(this);
    }

}

class ConfigMapService {
    /**
     * key: componentId
     *
     * value: component config
     */
    private config: Map<string, ComponentConfigMap>

    private readonly repository: ConfigMapRepository;

    constructor(repository: ConfigMapRepository) {
        this.repository = repository;
        this.config = new Map<string, ComponentConfigMap>();
        makeAutoObservable(this);
    }

    private createConfig(component: string) {
        let configMap = new ComponentConfigMap(component);
        this.config.set(configMap.componentId, configMap);
        return configMap;
    }

    public removeConfig(componentId: string) {
        this.config.delete(componentId);
    }

    public getConfigMap(componentId: string) {
        let configMap = this.config.get(componentId);
        if (!configMap) {
            configMap = this.createConfig(componentId);
        }
        return configMap;
    }

    public getConfigKeys() {
        return Array.from(this.config.keys());
    }
}

export default ConfigMapService;