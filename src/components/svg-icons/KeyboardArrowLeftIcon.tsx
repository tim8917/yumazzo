import React from "react";
import {ReactComponent as KeyboardArrowLeftSvg} from '../../icons/keyboard-arrow-left.svg';
import {SvgIcon, SvgIconProps} from "@mui/material";

export const KeyboardArrowLeftIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon viewBox="0 0 24 25" {...props}>
        <KeyboardArrowLeftSvg />
    </SvgIcon>
);
