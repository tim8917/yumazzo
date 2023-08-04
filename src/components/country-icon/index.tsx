import React from 'react';
import {SpIcon} from "../png-icons/SpIcon";

interface ICountryIconProps {
    code: CountryCode;
}

export type CountryCode =
    | 'sp'
    ;

const map: Record<CountryCode, () => JSX.Element> = {
    sp: SpIcon,
};

export const CountryIcon: React.FC<ICountryIconProps> = ({code}) => {
    const Icon = map[code];

    return (
        <Icon />
    );
};
