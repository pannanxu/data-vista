import React from "react";
import FreelyLayout from './Freely';
import MobileLayout from './Mobile';
import GridLayout from './Grid';

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