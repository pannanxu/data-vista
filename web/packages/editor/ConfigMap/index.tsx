import useCore from "@data-vista/core/useCore";
import {VistaButton} from "@data-vista/ui";
import withMonitor from "@data-vista/core/withMonitor";
import ConfigMapService from "@data-vista/core/service/ConfigMapService";

const ConfigNameComponent = withMonitor<{
    service: ConfigMapService
    id: string
}>((props) => {
    const config = props.service.getConfigMap(props.id);
    return <div>{config?.id},{config?.config.name}</div>
})

const ConfigMapEditor = () => {
    const configMapService = useCore('configMap');
    return <div className={"config-map-editor"}>
        <ConfigNameComponent service={configMapService} id={"1"}/>
        <ConfigNameComponent service={configMapService} id={"2"}/>
        <VistaButton onClick={() => {
            configMapService.createConfig("1");
        }}>
            ConfigMapEditor
        </VistaButton>
    </div>
}

export default ConfigMapEditor;