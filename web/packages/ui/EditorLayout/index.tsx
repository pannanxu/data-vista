import React from "react";
import Box from "@mui/joy/Box";

type LayoutProps = {
    header: React.ReactNode
    children: any
    configMap: React.ReactNode
    components: React.ReactNode
}

const EditorLayout: React.FC<LayoutProps> = ({header, components, children, configMap}) => {
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
        <Box sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gridColumn: '1 / -1',
            borderBottom: '1px solid',
            borderColor: 'divider',
        }}>
            {header}
        </Box>
        <Box sx={{
            p: 2,
            borderRight: '1px solid',
            bgcolor: 'background.surface',
            borderColor: 'divider',
            display: {
                xs: 'none',
                sm: 'initial',
            },
        }}>
            {components}
        </Box>
        <Box>
            {children}
        </Box>
        <Box sx={{
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
            {configMap}
        </Box>
    </Box>
}

export default EditorLayout;