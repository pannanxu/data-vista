"use client";
import React, {useRef, useState} from "react";
import {useMount} from "ahooks";
import {useEvent} from "@data-vista/core";
import {useFreely} from "./useFreely";

import './viewer.style.scss'
import {nanoid} from "nanoid";
import Move from "./move";

const Viewer: React.FC<{
}> = () => {
    const controller = useFreely();

    const infiniteViewerRef = useRef<HTMLDivElement>(null)
    const infiniteViewportRef = useRef<HTMLDivElement>(null)
    const [data, setData] = useState<string[]>([]);

    useMount(() => {
        controller.viewer.init(infiniteViewerRef.current!, infiniteViewportRef.current!)
        controller.move.createMoveable(infiniteViewportRef.current!)
        controller.move.createSelector(infiniteViewerRef.current!)

        setData(Array.from({length: 10}).map(e => nanoid()))
    })

    useEvent('DragComponentToCanvas', (data) => {
        console.log('DragComponentToCanvas', data)
    })

    return <div className="viewer" ref={infiniteViewerRef}>
        <div className={"viewport"}
             ref={infiniteViewportRef}
             style={{
                 width: `${controller.viewer.viewport.width}px`,
                 height: `${controller.viewer.viewport.height}px`
             }}
        >
            {
                data?.map((id) => {
                    return <Move key={id}>
                        Hello {id}
                    </Move>
                })
            }
        </div>
    </div>;
};

export default Viewer;