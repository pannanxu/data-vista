"use client";
import React, {useRef} from "react";
import {useFreely} from "../useFreely";
import './style.css'
import {useMount} from "ahooks";
import {useEvent} from "@data-vista/core";

const Index: React.FC<{
    children: React.ReactNode
}> = ({children}) => {
    const {freelyService} = useFreely();

    const infiniteViewerRef = useRef<HTMLDivElement>(null)
    const infiniteViewportRef = useRef<HTMLDivElement>(null)

    useMount(() => {
        freelyService.init(infiniteViewerRef.current!, infiniteViewportRef.current!)
    })

    useEvent('DragComponentToCanvas', (data) => {
        console.log('DragComponentToCanvas', data)
    })

    return <div className="viewer" ref={infiniteViewerRef}>
        <div className={"viewport"}
             ref={infiniteViewportRef}
             style={{
                 width: `${freelyService.window.width}px`,
                 height: `${freelyService.window.height}px`
             }}
        >
            {children}
        </div>
    </div>;
};

export default Index;