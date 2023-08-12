"use client";
import React from "react";

import './move.style.scss'

const Move: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    return <div className={"freely-component"}>
        {children}
    </div>
}

export default Move;