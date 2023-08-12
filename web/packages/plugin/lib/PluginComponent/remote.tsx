"use client";
import React from "react";
import Script from "next/script";
import ReactDOM from "react-dom";
import JSX from "react/jsx-runtime";
import {registerPlugin} from "../register";
import * as plugin from "../../index";

if (typeof window !== "undefined") {
    // @ts-ignore
    window.React = React;
    // @ts-ignore
    window.ReactDOM = ReactDOM;
    // @ts-ignore
    window.jsxRuntime = JSX;
    // @ts-ignore
    window.plugin = plugin;
}

const RemotePlugin: React.FC<{
    src: string,
    name: string,
    component: string,
    [key: string]: any
}> = (props) => {
    const {src, name, component} = props;
    const [PluginComponent, setPluginComponent] = React.useState<any>(null);

    return <>
        <React.Suspense fallback={<div>loading</div>}>
            <Script
                src={src}
                onLoad={() => {
                    // @ts-ignore
                    const pluginDefinition = window[name].default;
                    const plugin = registerPlugin(pluginDefinition);
                    const Component = plugin.components.find(e => e.name === component)?.component;
                    setPluginComponent(Component);
                }}/>
            {PluginComponent && <PluginComponent {...props}/>}
        </React.Suspense>
    </>;
};

export default RemotePlugin;