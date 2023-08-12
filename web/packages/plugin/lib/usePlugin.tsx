import {getPlugin} from "./register";

const usePlugin = (pluginId: string) => {
    return getPlugin(pluginId);
}