import React from 'react';
import {PngIcon} from "../png-icon";
import {SpIcon, ThIcon, InIcon, VnIcon} from "../png-icons";

interface ICountryIconProps {
    code: string;
}

export type CountryCode =
    'sp'
    | 'th'
    | 'in'
    | 'vn'
    ;

const map: Partial<Record<CountryCode, () => JSX.Element>> = {
    sp: SpIcon,
    th: ThIcon,
    in: InIcon,
    vn: VnIcon,
};

export const CountryIcon: React.FC<ICountryIconProps> = ({code}) => {
    if (!code) {
        return null;
    }

    const Icon = map[code.toLowerCase() as CountryCode];

    if (!Icon) {
        return (
            <PngIcon alt={code} title={code} />
        );
    }

    return (
        <Icon />
    );
};
