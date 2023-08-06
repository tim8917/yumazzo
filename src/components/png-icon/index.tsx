import React from 'react';
import styled from "@emotion/styled";

const DEFAULT_SIZE = 24;

interface ICountryIconProps {
    src?: string,
    alt: string;
    height?: number;
    width?: number;
}

const Image = styled.img`
    vertical-align: middle;
`;

export const PngIcon: React.FC<ICountryIconProps> = (props) => {
    const {
        src,
        alt,
        height = DEFAULT_SIZE,
        width = DEFAULT_SIZE,
    } = props;

    return (
        <Image src={src} alt={alt} height={height} width={width} />
    );
};
