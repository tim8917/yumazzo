import React from "react";
import {Box} from "@mui/material";
import {YumazzoIcon} from "../svg-icons/YumazzoIcon";

export function Welcome() {
    return (
        <Box sx={{
                display: 'flex',
                width: '100%',
                height: '400px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <YumazzoIcon sx={{width: '100%'}}/>
        </Box>
    );
}
