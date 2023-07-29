import React from "react";
import ListItemButton from "@mui/joy/ListItemButton";
import {ListItemContent, ListItemDecorator, Typography} from "@mui/joy";

const VistaMaterialItem: React.FC<{
    icon: any,
    displayName: string
}> = ({icon, displayName}) => {
    return <ListItemButton>
        <ListItemDecorator sx={{alignSelf: 'flex-start'}}>
            {icon}
        </ListItemDecorator>
        <ListItemContent>
            <Typography>{displayName}</Typography>
        </ListItemContent>
    </ListItemButton>
}

export default VistaMaterialItem;