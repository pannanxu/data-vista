"use client";
import {getPlugin} from "../register";
import RemotePlugin from "./remote";
import React from "react";

const PluginComponent = (props: { id: string, component: string, [key: string]: any }) => {
    const {id, component} = props
    const plugin = getPlugin(id);

    const materialComponent = plugin?.components?.find(e => e.name === component);

    return <React.Suspense fallback={<div>loading...</div>}>
        {
            materialComponent?.component
                ? <materialComponent.component {...props}/>
                : plugin.src
                    ? <RemotePlugin {...props} src={plugin.src} name={plugin.name}/>
                    : <div>暂无插件</div>
        }
    </React.Suspense>
}

export {
    PluginComponent
};