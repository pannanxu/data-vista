"use client"
import {useColorScheme} from "@mui/joy/styles";
import {useEffect, useState} from "react";
import IconButton from "@mui/joy/IconButton";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

const ColorSchemeToggle = () => {
    const {mode, setMode} = useColorScheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="primary"/>;
    }
    return (
        <IconButton
            id="toggle-mode"
            size="sm"
            variant="outlined"
            color="primary"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
        </IconButton>
    );
}

export default ColorSchemeToggle;