import {PluginDefinition} from "./types/plugin";

export class PluginContainer {

    private static plugin: PluginContainer;
    readonly pluginDefinitionStore: Record<string, PluginDefinition> = {}

    private constructor() {
    }

    public static get() {
        if (!PluginContainer.plugin) {
            PluginContainer.plugin = new PluginContainer()
        }
        return PluginContainer.plugin;
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