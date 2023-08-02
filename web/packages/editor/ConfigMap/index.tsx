"use client";

import {useCore} from "@data-vista/core";
import {VistaButton} from "@data-vista/ui";
import withMonitor from "@data-vista/core/withMonitor";
import {ConfigMapService} from "@data-vista/core";

const ConfigMapComponent = withMonitor<{
    service: ConfigMapService
    id: string
}>((props) => {
    const config = props.service.getConfigMap(props.id);
    console.log('item', props, config)
    return <div>{config?.componentId},{config?.displayName}, toggleLock:{config?.locker.isLock ? 'lock' : 'unlock'}</div>
})

const ConfigMapComponents = withMonitor<{
    service: ConfigMapService
}>((props) => {
    const keys = props.service.getConfigKeys();
    console.log('list', props)
    return <div>
        {
            keys.map(key => (<ConfigMapComponent key={key} service={props.service} id={key}/>))
        }
    </div>
})

const ConfigMapEditor = () => {
    const configMapService = useCore(e => e.configMap);
    return <div className={"config-map-editor"}>
        <ConfigMapComponents service={configMapService}/>

        <VistaButton onClick={() => {
            configMapService.getConfigMap(new Date().valueOf().toString());
        }}>
            get
        </VistaButton>
        <VistaButton onClick={() => {
            const key = configMapService.getConfigKeys()[0];
            configMapService.removeConfig(key);
        }}>
            del
        </VistaButton>
        <VistaButton onClick={() => {
            const key = configMapService.getConfigKeys()[0];
            let configMap = configMapService.getConfigMap(key);
            configMap?.locker.toggleLock();
            console.log('json: ', JSON.stringify(configMap));
        }}>
            lock
        </VistaButton>
    </div>
}

export default ConfigMapEditor;