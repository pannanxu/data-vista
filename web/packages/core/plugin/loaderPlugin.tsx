"use client";
import React from "react";
import Script from "next/script";
import ReactDOM from "react-dom";
import JSX from "react/jsx-runtime";
import {definePlugin} from "./plugins";

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

const LoaderPlugin: React.FC<{
    url: string,
    name: string,
    props?: any
}> = ({url, name, props = {}}) => {
    const [PluginComponent, setPluginComponent] = React.useState<any>(null);

    return <>
        <React.Suspense fallback={<div>loading</div>}>
            <Script
                src={url}
                onLoad={() => {
                    // @ts-ignore
                    setPluginComponent(PluginStarter.default.components[0].component);
                }}/>
            {PluginComponent && <PluginComponent {...props}/>}
        </React.Suspense>
    </>;
};

export default LoaderPlugin;