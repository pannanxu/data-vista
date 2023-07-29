"use client"
import React, {createContext} from 'react';
import ConfigMapService from "../service/ConfigMapService";

export type CoreServiceContextType = {
    configMap: ConfigMapService;
    configMap1: ConfigMapService;
};

export type coreServiceKeys = keyof CoreServiceContextType;

const services: CoreServiceContextType = {
    configMap: new ConfigMapService(),
    configMap1: new ConfigMapService(),
}

const CoreServiceContext = createContext<CoreServiceContextType>(services);

export const CoreServiceProvider: React.FC<{
    children: React.ReactNode;
}> = ({children}) => {
    return (<CoreServiceContext.Provider value={services}>
            {children}
        </CoreServiceContext.Provider>
    );
}

export default CoreServiceContext

