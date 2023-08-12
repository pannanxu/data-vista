"use client";
import {VistaList} from "@data-vista/ui";
import VistaMaterialItem from "@data-vista/ui/VistaMaterialItem";
import React, {useEffect, useMemo, useRef} from "react";
import type {PluginResource} from "@data-vista/plugin/types";
import {MaterialComponentType} from "@data-vista/plugin/types";
import {getPlugins} from "@data-vista/plugin";

const MaterialDrag: React.FC<{
    plugin: PluginResource
    component: MaterialComponentType
}> = ({plugin, component}) => {

    const componentRef = useRef<HTMLDivElement>(null);
    const dataRef = useRef<any>({
        plugin: plugin,
        component: component,
        offset: {
            x: 1,
            y: 1
        }
    });

    const getData = () => {
        return dataRef.current;
    }

    useEffect(() => {
        const fn = (ev: DragEvent) => {
            // @ts-ignore
            const {clientWidth, clientHeight} = ev.target || {};
            const data = {
                ...getData(),
                offset: {
                    x: ev.offsetX / clientWidth,
                    y: ev.offsetY / clientHeight
                }
            };
            ev.dataTransfer?.setData('custom', JSON.stringify(data));
        }
        componentRef.current?.addEventListener("dragstart", fn)

        return () => {
            componentRef.current?.removeEventListener("dragstart", fn)
        }
    }, [component]);

    return <div ref={componentRef} draggable={true}>
        <VistaMaterialItem icon={<i>icon<i></i></i>} displayName={`${plugin.id}_${component.name}`}/>
    </div>
}

const EditorMaterials = () => {

    const components = useMemo(() => {
        const list: any[] = []
        const definitions = getPlugins();
        Object.keys(definitions).map(e => definitions[e]).forEach(plugin => {
            plugin.components.forEach(component => {
                let key = `${plugin.id}-${component.name}`;
                list.push(<MaterialDrag key={key} plugin={plugin} component={component}/>)
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