"use client";
import {PluginContainer, RenderPluginComponent} from "@data-vista/plugin";
import React, {useRef} from "react";
import {useDrop} from "ahooks";
import {publishEvent} from "@data-vista/core";
import {MaterialComponentType} from "@data-vista/plugin/plugin";
import materials from "@data-vista/materials";
import editorLayout from "@data-vista/editor/Layout";
import EditorLayout from "@data-vista/ui/EditorLayout";
import ThemeColorScheme from "@data-vista/ui/ThemeColorScheme";
import ConfigMapEditor from "@data-vista/editor/ConfigMap";
import EditorMaterials from "@data-vista/editor/Materials";

const container = PluginContainer.get();
[...materials, editorLayout].forEach(e => container.registerPlugin(e));

const Drop: React.FC<{
    canvasRef: React.MutableRefObject<any>
}> = ({canvasRef}) => {

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

export default function LayoutPage({searchParams}: { searchParams: { layout: string } }) {
    const canvasRef = useRef()

    return (
        <>
            <EditorLayout.Header>
                <ThemeColorScheme/>
            </EditorLayout.Header>
            <EditorLayout.Component>
                <EditorMaterials/>
            </EditorLayout.Component>
            <EditorLayout.Editor>
                <div ref={canvasRef}>
                    <RenderPluginComponent name={searchParams.layout}/>
                </div>
            </EditorLayout.Editor>
            <EditorLayout.Config>
                <ConfigMapEditor/>
            </EditorLayout.Config>
            <Drop canvasRef={canvasRef}/>
        </>
    );
}
