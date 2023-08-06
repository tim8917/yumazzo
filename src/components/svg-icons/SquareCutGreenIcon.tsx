import React from "react";
import {ReactComponent as SquareCutGreenSvg} from '../../icons/square-cut-green.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const SquareCutGreenIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 12 12" {...props}>
        <SquareCutGreenSvg />
    </SvgIcon>
);
