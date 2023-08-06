import React from "react";
import {Difficulty, DifficultyIconMap} from "../../model";
import {Box} from "@mui/material";

interface IDifficultyProps {
    difficulty: number | Difficulty;
}

export const DifficultyComponent: React.FC<IDifficultyProps> = ({difficulty}) => {
    const Icon = DifficultyIconMap[difficulty as Difficulty];

    return (
        <Box sx={{display: 'flex'}}>
            <Icon sx={{width: '12px', marginRight: '10px'}} />
            {Difficulty[difficulty]}
        </Box>
    );
};
