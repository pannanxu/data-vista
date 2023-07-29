import React from "react";
import dynamic from 'next/dynamic'

const MobileLayout = dynamic(() => import('./Mobile'))
const FreelyLayout = dynamic(() => import('./Freely'))
const GridLayout = dynamic(() => import('./Grid'))

const layouts = {
    freely: FreelyLayout,
    grid: GridLayout,
    mobile: MobileLayout
}

const EditorLayout: React.FC<{
    layout: 'freely' | 'grid' | 'mobile'
}> = ({layout}) => {

    const Component = layouts[layout];

    return <div className={"layout-editor"}>
        <Component/>
    </div>
}

export default EditorLayout;