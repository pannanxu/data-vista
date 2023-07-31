import {PluginDefinition} from "./types/plugin";

class PluginStore {
    private static instance: PluginStore = new PluginStore();
    private pluginDefinitionStore: Record<string, PluginDefinition> = {}

    private constructor() {
    }

    public static getInstance(): PluginStore {
        return this.instance;
    }

    public registerPlugin(plugin: PluginDefinition) {
        this.pluginDefinitionStore[plugin.name] = plugin;
    }

    public getPlugin(name: string): PluginDefinition {
        return this.pluginDefinitionStore[name]
    }

    public getAllPlugin(): Record<string, PluginDefinition> {
        return this.pluginDefinitionStore
    }

}

const usePluginStore = () => {
    const instance = PluginStore.getInstance();
    return {
        getPlugin: instance.getPlugin,
        plugins: instance.getAllPlugin()
    }
}

export {PluginStore, usePluginStore};