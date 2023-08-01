"use client";
import React from "react";
import Script from "next/script";
import ReactDOM from "react-dom";
import JSX from "react/jsx-runtime";

if (typeof window !== "undefined") {
    window.React = React;
    window.ReactDOM = ReactDOM;
    // @ts-ignore
    window.jsxRuntime = JSX;
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
                    console.log("window", window);
                    // @ts-ignore
                    setPluginComponent(PluginStarter.default.components[0]);
                }}/>
            {PluginComponent && <PluginComponent {...props}/>}
        </React.Suspense>
    </>;
};

export default LoaderPlugin;