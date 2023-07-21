import React from "react";
import JSX from "react/jsx-runtime";

import loadable from "@loadable/component";

const packages: {
    [key: string]: any;
} = {
    "react": React,
    "react/jsx-runtime": JSX,
    "@loadable/component": loadable
};

const require = (name: string): any => {
    console.log('pack', name)
    return packages[name]
};

const getParsedModule = (code: string) => {
    const module = {
        exports: {},
    };
    Function("require, exports, module", code)(require, module.exports, module);
    return module;
};

const fetchComponent: (url: string) => Promise<string> = (url: string) => {
    return fetch(url).then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.text();
    });
};

const loadComponent: (url: string) => Promise<Record<any, any>> = (url: string) => {
    return fetchComponent(url).then(async (js) => {
        const module = getParsedModule(js);
        console.log('module', module)
        return module.exports;
    });
};

export default loadComponent;