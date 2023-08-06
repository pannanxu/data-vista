import {enableStaticRendering} from "mobx-react-lite";
import CoreService from "../service/CoreService";

enableStaticRendering(typeof window === "undefined");

const core = new CoreService();

const useCore = () => {
    return core;
}

export {
    useCore, core
};