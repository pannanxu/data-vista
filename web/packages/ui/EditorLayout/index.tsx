import React from "react";
import Box from "@mui/joy/Box";

type LayoutProps = {
    header?: React.ReactNode
    children: any
    configMap?: React.ReactNode
    components?: React.ReactNode
}

const Layout = ({children}: { children: any }) => {
    return <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
            xs: '1fr',
            sm: '200px 1fr',
            md: '300px 1fr 300px'
        },
        gridTemplateRows: '64px 1fr',
        minHeight: '100vh',
    }}>
        {children}
    </Box>
}

const Component = ({children}: { children: any }) => {
    return <Box sx={{
        p: 2,
        borderRight: '1px solid',
        bgcolor: 'background.surface',
        borderColor: 'divider',
        display: {
            xs: 'none',
            sm: 'initial',
        },
    }}>
        {children}
    </Box>
}
const Header = ({children}: { children: any }) => {
    return <Box sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
    }}>
        {children}
    </Box>
}
const Config = ({children}: { children: any }) => {
    return <Box sx={{
        p: 2,
        borderLeft: '1px solid',
        bgcolor: 'background.surface',
        borderColor: 'divider',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'initial',
        },
    }}>
        {children}
    </Box>
}

const Editor = ({children}: { children: any }) => {
    return <Box>
        {children}
    </Box>
}

const EditorLayout = {
    Layout,
    Header,
    Component,
    Config,
    Editor
}

export default EditorLayout;