import React from "react";
import {ReactComponent as YumazzoSvg} from '../../icons/yumazzo.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const YumazzoIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 204 35" {...props}>
        <YumazzoSvg />
    </SvgIcon>
);
