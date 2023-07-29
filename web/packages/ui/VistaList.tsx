import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import React, {useMemo} from "react";

const VistaListItem: React.FC<{
    children: React.ReactNode
}> = ({children}) => {
    return <ListItem>
        {children}
    </ListItem>
}

const VistaList: React.FC<{
    children: React.ReactNode
}> = ({children}) => {
    return <List>
        {children}
    </List>
}

const VistaListable: React.FC<{
    list: React.ReactNode[]
}> = ({list}) => {
    return <VistaList>
        {list}
    </VistaList>
}

export {
    VistaListItem,
    VistaList,
    VistaListable
}