import React from "react";
import JSX from "react/jsx-runtime";

const packages: {
    [key: string]: any;
} = {
    "react": React,
    "react/jsx-runtime": JSX
};

const require = (name: string): any => packages[name];

const getParsedModule = (code: string) => {
    const module = {
        exports: {},
    };
    Function("require, exports, module", code)(require, module.exports, module);
    // const script = new vm.Script(code);
    // const context = vm.createContext({
    //     require,
    //     exports: module.exports,
    //     module,
    // });
    // script.runInContext(context);
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
    return fetchComponent(url).then(js => {
        const module = getParsedModule(js);
        return module.exports;
    });
};

export default loadComponent;