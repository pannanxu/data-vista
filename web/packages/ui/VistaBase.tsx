"use client"
import CssBaseline from '@mui/joy/CssBaseline';
import {CssVarsProvider} from '@mui/joy/styles';
import React from "react";

export const VistaBase: React.FC<{
    children?: React.ReactNode;
}> = ({children}) => {
    return <CssVarsProvider>
        <CssBaseline/>
        {children}
    </CssVarsProvider>
};
