import {VistaListable} from "@data-vista/ui";
import VistaMaterialItem from "@data-vista/ui/VistaMaterialItem";
import React, {useMemo} from "react";
import {usePluginStore} from "@data-vista/core/plugin/pluginStore";
import {ExtensionPoint} from "@data-vista/core/plugin/ExtensionPoint";

const EditorMaterials = () => {
    const {plugins} = usePluginStore()

    const components = useMemo(() => {
        const components: React.ReactNode[] = []
        Object.keys(plugins).map(e => plugins[e]).filter(plugin => plugin.extensionPoints === ExtensionPoint.MaterialComponent).forEach(plugin => {
            plugin.components.forEach(component => {
                components.push(<VistaMaterialItem key={component.name} icon={<i>icon<i></i></i>} displayName={component.name}/>)
            })
        })
        return components;
    }, [])
    
    return <div className={"materials-editor"}>
        <VistaListable list={components}/>
    </div>
}

export default EditorMaterials;