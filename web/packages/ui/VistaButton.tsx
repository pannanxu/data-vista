"use client";

import Button, {ButtonProps} from '@mui/joy/Button';
import React from "react";

export const VistaButton: React.FC<ButtonProps> = (props) => {
    return <Button {...props}>{props.children}</Button>
};
