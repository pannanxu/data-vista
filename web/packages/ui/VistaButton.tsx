"use client";

import Button from '@mui/joy/Button';
import React from "react";

export const VistaButton: React.FC<{
    onClick?: () => void;
    children?: React.ReactNode
}> = (props) => {
    return <Button {...props}>{props.children}</Button>
};
