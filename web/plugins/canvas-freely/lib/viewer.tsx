"use client";
import React, {useRef} from "react";
import {useDrop, useMount} from "ahooks";
import {publishEvent, useEvent} from "@data-vista/core";
import {useFreely} from "./useFreely";

import './viewer.style.scss'
import Render from "./render";
import {MaterialComponentType} from "@data-vista/plugin/types";

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

const Viewer: React.FC<{}> = () => {
    const controller = useFreely();

    const infiniteViewerRef = useRef<HTMLDivElement>(null)
    const infiniteViewportRef = useRef<HTMLDivElement>(null)

    useMount(() => {
        controller.viewer.init(infiniteViewerRef.current!, infiniteViewportRef.current!)
        controller.move.createMoveable(infiniteViewportRef.current!)
        controller.move.createSelector(infiniteViewerRef.current!)
    })

    useEvent('DragComponentToCanvas', (data) => {
        console.log('DragComponentToCanvas', data)
    })

    return <>
        <div className="viewer" ref={infiniteViewerRef}>
            <div className={"viewport"}
                 ref={infiniteViewportRef}
                 style={{
                     width: `${controller.viewer.viewport.width}px`,
                     height: `${controller.viewer.viewport.height}px`
                 }}
            >
                <Render/>
            </div>
        </div>
        <Drop canvasRef={infiniteViewerRef}/>
    </>;
};

export default Viewer;