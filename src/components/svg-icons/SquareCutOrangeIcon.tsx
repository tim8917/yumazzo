import React from "react";
import {ReactComponent as SquareCutOrangeSvg} from '../../icons/square-cut-orange.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const SquareCutOrangeIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 12 12" {...props}>
        <SquareCutOrangeSvg />
    </SvgIcon>
);
