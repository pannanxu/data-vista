import CoreServiceContext, {coreServiceKeys} from "./context/CoreServiceContext";
import {useContext} from "react";


const useCore = (name: coreServiceKeys) => {
    const context = useContext(CoreServiceContext);
    return context[name]
}

export default useCore;