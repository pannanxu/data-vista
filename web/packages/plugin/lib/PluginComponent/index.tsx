"use client";
import {getPlugin} from "../register";
import RemotePlugin from "./remote";

const PluginComponent = (props: { id: string, component: string, [key: string]: any }) => {
    const {id, component} = props
    const plugin = getPlugin(id);

    const Component = plugin?.components?.find(e => e.name === component)?.component;
    if (Component) {
        return Component ? <Component {...props}/> : <div>暂无插件</div>
    }

    if (!plugin.src) {
        return <div>暂无插件</div>
    }

    return <RemotePlugin {...props} src={plugin.src} name={plugin.name}/>
}

export {
    PluginComponent
};