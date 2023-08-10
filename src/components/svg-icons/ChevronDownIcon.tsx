import React from "react";
import {ReactComponent as ChevronDownSvg} from '../../icons/chevron-down.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const ChevronDownIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 20 20" {...props}>
        <ChevronDownSvg />
    </SvgIcon>
);
