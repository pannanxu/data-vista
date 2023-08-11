import {PluginResource} from "../types";

const plugins: Record<string, PluginResource> = {}

const registerPlugin = (plugin: PluginResource) => {
    plugins[plugin.id] = plugin;
    return plugin;
}

const getPlugin = (id: string) => {
    return plugins[id];
}

const getPlugins = () => plugins;

export {
    registerPlugin,
    getPlugin,
    getPlugins
}