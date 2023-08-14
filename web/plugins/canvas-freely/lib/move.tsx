"use client";
import React from "react";

import './move.style.scss'
import {ComponentSx} from "@data-vista/core/types";

const Move: React.FC<{
    children?: any
    dataset: {
        id: string
    },
    sx: ComponentSx
}> = ({children, dataset, sx}) => {
    return <div className={"freely-component"} data-id={dataset.id}
                style={{
                    width: `${sx.w}px`,
                    height: `${sx.h}px`,
                    transform: `translate(${sx.x}px, ${sx.y}px) rotate(${sx.r || 0}deg) scale(${sx.s?.[0] || 1},${sx.s?.[1] || 1})`,
                    zIndex: sx.z || 1
                }}
    >
        {children}
    </div>
}

export default Move;