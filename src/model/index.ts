import React from "react";
import {SvgIconProps} from "@mui/material";
import {SquareCutGreenIcon, SquareCutOrangeIcon, SquareCutRedIcon} from "../components/svg-icons";

export interface Recipe {
    id: number,
    origin: string;
    name: string;
    difficulty: Difficulty;
    time?: number;

    authenticity?: string;
    cookingOil?: string;
    description?: string;
    protein?: string;
    serves?: number;
    spice?: string;
    stock?: string;
    volume?: number;
}

export enum Difficulty {
    Easy,
    Medium,
    Hard,
}

export const DifficultyIconMap: Record<Difficulty, React.FC<SvgIconProps>> = {
    [Difficulty.Easy]: SquareCutGreenIcon,
    [Difficulty.Medium]: SquareCutOrangeIcon,
    [Difficulty.Hard]: SquareCutRedIcon,
};
