"use client";

import {usePlugin} from "./usePlugin";


const RenderPluginComponent = ({name}: { name: string }) => {
    const plugin = usePlugin(name);

    return <>
        {plugin?.component ? <plugin.component/> : <div>暂无插件</div>}
    </>
}

export default RenderPluginComponent;