import React from 'react';
import {Box} from "@mui/material";
import {universalColors} from "../../themes/universal-colors";

interface IStickyHeadlineProps {
    children: React.ReactNode,
}

export const StickyHeadline: React.FC<IStickyHeadlineProps> = ({children}) => {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: '0px',
                padding: '24px 24px 0',
                backgroundColor: universalColors.neutral_100,
                boxShadow: `0px 10px 7px -6px ${universalColors.neutral_100}`,
                zIndex: 1,
            }}
        >
            {children}
        </Box>
    );
};