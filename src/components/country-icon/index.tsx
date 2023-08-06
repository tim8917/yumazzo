import React from 'react';
import {PngIcon} from "../png-icon";
import {SpIcon, ThIcon, InIcon, VnIcon} from "../png-icons";

interface ICountryIconProps {
    code: CountryCode;
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
    const Icon = map[code];

    if (!Icon) {
        return (
            <PngIcon src={Icon} alt={`${code}-flag`} />
        );
    }

    return (
        <Icon />
    );
};
