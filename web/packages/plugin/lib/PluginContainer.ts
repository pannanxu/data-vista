import {Plugin, PluginDefinition} from "../plugin";

export class PluginContainer {

    private static plugin: PluginContainer;
    readonly pluginDefinitionStore: Record<string, Plugin> = {}

    private constructor() {
    }

    public static get() {
        if (!PluginContainer.plugin) {
            PluginContainer.plugin = new PluginContainer()
        }
        return PluginContainer.plugin;
    }

    public registerPlugin(plugin: PluginDefinition) {
        plugin.components.forEach(e => {
            this.pluginDefinitionStore[`${plugin.project}/${e.name}`] = {...e, pluginId: `${plugin.project}/${e.name}`};
        })
    }

    public getPlugin(name: string): Plugin {
        return this.pluginDefinitionStore[`${name}`]
    }

    public getAllPlugin(): Record<string, Plugin> {
        return this.pluginDefinitionStore
    }

}