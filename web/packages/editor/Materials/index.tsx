"use client";
import {VistaList} from "@data-vista/ui";
import VistaMaterialItem from "@data-vista/ui/VistaMaterialItem";
import React, {useMemo, useRef} from "react";
import {PluginContainer} from "@data-vista/core/plugin/PluginContainer";
import {useDrag, useDrop} from "ahooks";
import {MaterialComponentType} from "@data-vista/core/plugin/types/plugin";
import {publishEvent} from "@data-vista/core";

type DropProps = {
    canvasRef: React.MutableRefObject<any>;
}

const MaterialDrag: React.FC<{
    component: MaterialComponentType
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
        <VistaMaterialItem key={component.name} icon={<i>icon<i></i></i>}
                           displayName={component.name}/>
    </div>
}

const Drop: React.FC<DropProps> = ({canvasRef}) => {

    useDrop(canvasRef, {
        onDom: (content: MaterialComponentType, e: any) => {
            // 如果拖拽到画布上，那么就是相对于画布的坐标
            // 如果拖拽到画布上的组件上，那么就是相对于组件的坐标，需要加上组件的坐标
            let x = e.offsetX;
            let y = e.offsetY;
            if (!e.target?.id || e.target?.id !== "viewport-components") {
                const rect = e.target.getBoundingClientRect();
                x = rect.x;
                y = rect.y;
            }
            publishEvent('DragComponentToCanvas', {
                component: content,
                pos: [x, y]
            })
            console.log({
                component: content,
                pos: [x, y]
            })
        },
    });

    return <></>;
};

const EditorMaterials: React.FC<DropProps> = ({canvasRef}) => {

    const components = useMemo(() => {
        const definitions = PluginContainer.get().getAllPlugin();
        return Object.keys(definitions)
            .map(e => definitions[e])
            .filter(plugin => plugin.extensionPoints === 'MaterialComponent')
            .map(plugin => {
                return plugin.components.map(component => {
                    return <MaterialDrag key={component.name} component={component}/>
                })
            })
    }, [])

    return <>
        <div className={"materials-editor"}>
            <Drop canvasRef={canvasRef}/>
            <VistaList>
                {components}
            </VistaList>
        </div>
    </>
}

export default EditorMaterials;