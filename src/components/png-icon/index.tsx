import React from 'react';
import styled from "@emotion/styled";

const DEFAULT_SIZE = 24;

const Image = styled.img`
    vertical-align: middle;
    font-size: 10px;
`;

export const PngIcon: React.FC<React.ComponentProps<'img'>> = (props) => {
    const {
        height = DEFAULT_SIZE,
        width = DEFAULT_SIZE,
        ...restProps
    } = props;

    return (
        <Image {...restProps} height={height} width={width} />
    );
};
