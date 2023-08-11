"use client";
import {useFreely} from "./useFreely";
import {useRef} from "react";
import {useEventListener, useMount, useUnmount} from "ahooks";
import './ruler.style.scss'

const Ruler = () => {
    const controller = useFreely();

    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const verticalRef = useRef<HTMLDivElement | null>(null);
    const rulerRef = useRef<Function>();

    useMount(() => {
        rulerRef.current = controller.createRuler(horizontalRef.current!, verticalRef.current!);
    });

    useUnmount(() => {
        rulerRef.current?.();
    })

    useEventListener('resize', () => controller.handleResize())

    return <div className={"rulers"}>
        <div className={"ruler-box"}/>
        <div className="ruler horizontal" ref={horizontalRef}/>
        <div className="ruler vertical" ref={verticalRef}/>
    </div>;
}

export default Ruler