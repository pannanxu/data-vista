"use client";
import {VistaList} from "@data-vista/ui";
import VistaMaterialItem from "@data-vista/ui/VistaMaterialItem";
import React, {useMemo, useRef} from "react";
import {PluginContainer} from "@data-vista/plugin";
import {useDrag} from "ahooks";
import {Plugin} from "@data-vista/plugin/plugin";

const MaterialDrag: React.FC<{
    component: Plugin
}> = ({component}) => {

    const componentRef = useRef<HTMLDivElement>(null);

    useDrag(component, componentRef, {
        onDragStart: () => {
            // .
        },
        onDragEnd: () => {
            // .
        },
    });

    return <div ref={componentRef}>
        <VistaMaterialItem key={component.pluginId} icon={<i>icon<i></i></i>} displayName={component.name}/>
    </div>
}

const EditorMaterials = () => {

    const components = useMemo(() => {
        const definitions = PluginContainer.get().getAllPlugin();
        return Object.keys(definitions)
            .map(e => definitions[e])
            .filter(plugin => plugin.extensionPoints === 'MaterialComponent')
            .map(component => <MaterialDrag key={component.pluginId} component={component}/>)
    }, [])

    return <>
        <div className={"materials-editor"}>
            <VistaList>
                {components}
            </VistaList>
        </div>
    </>
}

export default EditorMaterials;