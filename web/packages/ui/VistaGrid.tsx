import React from "react";
import Grid from "@mui/joy/Grid";

import type {GridOwnerState} from '@mui/joy/Grid'

export const VistaGrid: React.FC<GridOwnerState> = (props) => {
    return <Grid {...props}>
        {props?.children}
    </Grid>
};
