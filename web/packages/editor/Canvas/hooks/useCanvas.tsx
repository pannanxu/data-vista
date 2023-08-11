import {Component, getPlugin} from "@data-vista/plugin";
import {useRef} from "react";

const useCanvas = (pluginId: string, layout: string) => {
    const plugin = getPlugin(pluginId);

    const canvasRef = useRef<any>()
    const component = plugin.components.find(plugin => plugin.name === layout);

    if (component && component.extensionPoints === 'Editor') {
        return {
            canvas: <div ref={canvasRef}><Component id={plugin.id} component={component.name}/></div>,
            canvasRef
        };
    }

    return {
        canvas: undefined,
        canvasRef
    }
}

export {
    useCanvas
}