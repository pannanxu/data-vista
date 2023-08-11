"use client";
import React from "react";
import Script from "next/script";
import ReactDOM from "react-dom";
import JSX from "react/jsx-runtime";
import {registerPlugin} from "../lib/register";
import {definePlugin} from '../lib/definePlugin'

if (typeof window !== "undefined") {
    // @ts-ignore
    window.React = React;
    // @ts-ignore
    window.ReactDOM = ReactDOM;
    // @ts-ignore
    window.jsxRuntime = JSX;
    // @ts-ignore
    window.core = {definePlugin}
}

const RemotePlugin: React.FC<{
    src: string,
    name: string,
    component: string,
    props?: Record<any, any>
}> = ({src, name, component, props = {}}) => {
    const [PluginComponent, setPluginComponent] = React.useState<any>(null);

    return <>
        <React.Suspense fallback={<div>loading</div>}>
            <Script
                src={src}
                onLoad={() => {
                    // @ts-ignore
                    const plugin = registerPlugin(window[name].default);
                    const Component = plugin.components.find(e => e.name === component);
                    setPluginComponent(Component);
                }}/>
            {PluginComponent && <PluginComponent {...props}/>}
        </React.Suspense>
    </>;
};

export default RemotePlugin;