"use client";

import {getPlugin} from "../lib/register";
import RemotePlugin from "./remote";

const Component = ({id, component}: { id: string, component: string }) => {

    const plugin = getPlugin(id);

    if (!plugin) {
        return <></>
    }

    if (plugin.components) {
        const Component = plugin.components.find(e => e.name === component)?.component;
        return Component ? <Component/> : <div>暂无插件</div>
    }

    if (!plugin.src) {
        return <></>
    }

    return <RemotePlugin src={plugin.src} name={plugin.name} component={component}/>
}

export default Component;