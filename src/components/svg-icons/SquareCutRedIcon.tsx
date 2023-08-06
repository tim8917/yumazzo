import React from "react";
import {ReactComponent as SquareCutRedSvg} from '../../icons/square-cut-red.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const SquareCutRedIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 12 12" {...props}>
        <SquareCutRedSvg />
    </SvgIcon>
);
