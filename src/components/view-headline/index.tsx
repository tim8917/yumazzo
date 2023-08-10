import {Link} from "wouter";
import {IconButton} from "@mui/material";
import {KeyboardArrowLeftIcon} from "../svg-icons/KeyboardArrowLeftIcon";
import React from "react";
import styled from "@emotion/styled";

interface IViewHeadlineProps {
    text: string;
    backRoute?: string;
}

const Root = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #2E3347;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
`;

export const ViewHeadline: React.FC<IViewHeadlineProps> = ({text, backRoute}) => {
    return (
        <Root>
            {backRoute && (
                <Link href={backRoute}>
                    <IconButton
                        aria-label="go back"
                        sx={{
                            padding: 0,
                            paddingRight: '10px',
                        }}
                    >
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                </Link>
            )}
            {text}
        </Root>
    );
};
