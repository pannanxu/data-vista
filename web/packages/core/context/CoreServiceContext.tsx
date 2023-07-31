"use client"
import React, {createContext} from 'react';
import ConfigMapService from "../service/configMap/ConfigMapService";
import ConfigMapRepository from "../repository/ConfigMapRepository";
import Api from '../api/api';
import Apis from '../api/apis';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
const api = new Api(baseUrl);
const apis = new Apis(api);

export type CoreServiceContextType = {
    configMap: ConfigMapService;
};

export type coreServiceKeys = keyof CoreServiceContextType;

const services: CoreServiceContextType = {
    configMap: new ConfigMapService(new ConfigMapRepository(apis)),
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

