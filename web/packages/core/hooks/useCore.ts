import CoreServiceContext, {CoreServiceContextType} from "../context/CoreServiceContext";
import {useContext} from "react";


const useCore = <T>(name: (e: CoreServiceContextType) => T) => {
    const context = useContext(CoreServiceContext);
    return name(context)
}

export {
    useCore
};