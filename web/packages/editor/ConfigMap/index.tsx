"use client";

import {ConfigMapService, useCore, useEvent} from "@data-vista/core";
import withMonitor from "@data-vista/core/withMonitor";
import {useState} from "react";

const ConfigMapComponent = withMonitor<{
    service: ConfigMapService
    id: string
}>((props) => {
    const config = props.service.getConfigMap(props.id);
    return <div>{config?.componentId},{config?.displayName},
        toggleLock:{config?.locker.isLock ? 'lock' : 'unlock'}</div>
})

const ConfigMapComponents = withMonitor<{
    service: ConfigMapService
}>((props) => {
    const keys = props.service.getConfigKeys();
    return <div>
        {
            keys.map(key => (<ConfigMapComponent key={key} service={props.service} id={key}/>))
        }
    </div>
})

const ConfigMapEditor = () => {
    const {configMapService} = useCore();
    const [component, setComponent] = useState<string>();

    useEvent('OnSelected', (event) => {
        if (event.components.length === 1) {
            setComponent(event.components[0]);
        }
    })

    return <div className={"config-map-editor"}>
        {component}
    </div>
}

export default ConfigMapEditor;