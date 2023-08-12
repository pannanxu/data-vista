"use client";
import {VistaList} from "@data-vista/ui";
import VistaMaterialItem from "@data-vista/ui/VistaMaterialItem";
import React, {useMemo, useRef} from "react";
import {useDrag} from "ahooks";
import type {PluginResource} from "@data-vista/plugin/types";
import {getPlugins} from "@data-vista/plugin";

const MaterialDrag: React.FC<{
    component: PluginResource
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
        <VistaMaterialItem key={component.id} icon={<i>icon<i></i></i>} displayName={component.name}/>
    </div>
}

const EditorMaterials = () => {

    const components = useMemo(() => {
        const list: any[] = []
        const definitions = getPlugins();
        Object.keys(definitions).map(e => definitions[e]).forEach(plugin => {
            plugin.components.forEach(component => {
                let key = `${plugin.id}-${component.name}`;
                list.push(<MaterialDrag key={key} component={plugin}/>)
            })
        })
        return list;
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