import {definePlugin} from "./plugin/plugins";
import LoaderPlugin from './plugin/loaderPlugin'
import {useCore} from './hooks/useCore';
import ConfigMapService from "./service/configMap/ConfigMapService";
import { publishEvent, useEvent } from "./hooks/useEvent";

export {
    definePlugin,
    LoaderPlugin,
    useCore,
    publishEvent,
    useEvent,

    ConfigMapService,
}
