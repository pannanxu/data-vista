import {definePlugin} from "./plugin/plugins";
import LoaderPlugin from './plugin/loaderPlugin'
import ConfigMapService from './service/configMap/ConfigMapService';
import {useCore} from './hooks/useCore';
import CoreServiceContext, { CoreServiceProvider } from './context/CoreServiceContext';

export {
    definePlugin,
    LoaderPlugin,
    ConfigMapService,
    useCore,
    CoreServiceContext,
    CoreServiceProvider
}
