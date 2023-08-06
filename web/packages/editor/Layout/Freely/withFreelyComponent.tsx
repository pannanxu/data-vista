import React from "react";


const withFreelyComponent = (Component: React.FC) => {

    const FreelyComponent = () => {

        return <div className={"freely-component"}>

            <Component />

        </div>
    }
    
    return FreelyComponent
}

export {
    withFreelyComponent
}