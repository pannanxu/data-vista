"use client";
import React, {useRef} from "react";
import {useDrop, useMount} from "ahooks";
import {publishEvent, useCore, useEvent} from "@data-vista/core";
import {useFreely} from "./useFreely";

import './viewer.style.scss'
import Render from "./render";
import {nanoid} from "nanoid";
import {MaterialComponentType, PluginResource} from "@data-vista/plugin/types";

const Viewer: React.FC<{}> = () => {
    const controller = useFreely();
    const {componentService} = useCore()

    const infiniteViewerRef = useRef<HTMLDivElement>(null)
    const infiniteViewportRef = useRef<HTMLDivElement>(null)

    useMount(() => {
        controller.viewer.init(infiniteViewerRef.current!, infiniteViewportRef.current!)
        controller.move.createMoveable(infiniteViewportRef.current!)
        controller.move.createSelector(infiniteViewerRef.current!)
    })

    useEvent('DragComponentToCanvas', (data) => {
        componentService.createComponent({
            id: nanoid(),
            pluginId: data.plugin.id,
            component: data.component.name,
            sx: {
                width: 300,
                height: 300,
                ...data.sx
            }
        })
    })

    const getParentFreelyComponent = (target: HTMLElement | undefined | null): HTMLElement | undefined => {
        if (!target) {
            return undefined;
        }
        let element = target?.parentElement;
        if (element?.dataset?.id) {
            return element;
        }
        return getParentFreelyComponent(element);
    };

    useDrop(infiniteViewerRef, {
        onDom: (content: {
            plugin: PluginResource,
            component: MaterialComponentType,
            offset: {
                x: number,
                y: number
            }
        }, e: any) => {
            let x = e.offsetX;
            let y = e.offsetY;
            if (e.target !== infiniteViewportRef.current) {
                // TODO getParentFreelyComponent 后续通过 css 控制组件层级，避免放置到 hoc 组件的内部组件上，可以解决不使用递归寻找
                const id = getParentFreelyComponent(e.target)?.dataset?.id;
                if (id) {
                    const component = componentService.getComponent(id);
                    x = x + (component?.sx?.x || 0);
                    y = y + (component?.sx?.y || 0);
                }
            }
            // 计算 offset 偏移量的比例（TODO 300:组件的默认宽高）
            x = x - (content.offset.x * 300);
            y = y - (content.offset.y * 300);

            publishEvent('DragComponentToCanvas', {
                ...content,
                sx: {
                    x,
                    y
                }
            })
        },
    });

    return <div className="viewer" ref={infiniteViewerRef}>
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
};

export default Viewer;