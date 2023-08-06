"use client";
import {useEffect, useRef} from "react";
import withMonitor from "@data-vista/core/withMonitor";
import {useFreely} from "../useFreely";
import {FreelyScrollType} from "../Viewer/FreelyService";
import './style.css'
import FreelyRulerService from "./FreelyRulerService";
import {useMount, useUnmount} from "ahooks";

const RulerScrollMonitor = withMonitor<{
    scroll: () => FreelyScrollType
    freelyRulerService: FreelyRulerService
}>(({scroll, freelyRulerService}) => {
    const freelyScroll = scroll()
    useEffect(() => {
        freelyRulerService.onScroll(freelyScroll.scrollLeft, freelyScroll.scrollTop)
    }, [freelyScroll.scrollLeft, freelyScroll.scrollTop]);
    return <></>;
})

const RulerZoomMonitor = withMonitor<{
    zoom: () => number
    freelyRulerService: FreelyRulerService
}>(({zoom, freelyRulerService}) => {
    const freelyZoom = zoom()
    useEffect(() => {
        freelyRulerService.onZoom(freelyZoom)
    }, [freelyZoom]);
    return <></>;
})

const Ruler = () => {
    const {freelyService, freelyRulerService} = useFreely();

    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const verticalRef = useRef<HTMLDivElement | null>(null);

    const handleResize = () => {
        freelyRulerService.resize();
    };

    useMount(() => {
        if (horizontalRef.current && verticalRef.current) {
            freelyRulerService.init(horizontalRef.current!, verticalRef.current!)
        }
        document.addEventListener("resize", handleResize);
    });

    useUnmount(() => {
        window.removeEventListener("resize", handleResize)
    })

    return <>
        <RulerScrollMonitor scroll={() => freelyService.scroll} freelyRulerService={freelyRulerService}/>
        <RulerZoomMonitor zoom={() => freelyService.zoom} freelyRulerService={freelyRulerService}/>
        <div className={"ruler-box"}/>
        <div className="ruler horizontal" ref={horizontalRef}/>
        <div className="ruler vertical" ref={verticalRef}/>
    </>;
};

const FreelyRuler = () => {
    return <Ruler/>
}


export default FreelyRuler;