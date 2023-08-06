import React from "react";
import dynamic from "next/dynamic";

const FreelyLayout = dynamic(() => import('./Freely'))
const MobileLayout = dynamic(() => import('./Mobile'))
const GridLayout = dynamic(() => import('./Grid'))

const EditorLayout: React.FC<{
    layout: 'freely' | 'grid' | 'mobile'
}> = ({layout}) => {
    return <div className={"layout-editor"}>
        <React.Suspense fallback={<div>加载中...</div>}>
            {layout === 'freely' && <FreelyLayout/>}
            {layout === 'grid' && <GridLayout/>}
            {layout === 'mobile' && <MobileLayout/>}
        </React.Suspense>
    </div>
}

export default EditorLayout;