import React from "react";
import {Recipe} from "../../model";
import styled from "@emotion/styled";
import {CountryCode, CountryIcon} from "../country-icon";
import {Box} from "@mui/material";
import {DifficultyComponent} from "../difficulty-component";

interface IMenuItemProps {
    recipe: Recipe;
}

const Root = styled.div`
    font-family: 'Bai Jamjuree', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const MenuItem: React.FC<IMenuItemProps> = ({recipe}) => {
    return (
        <Root>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flex: '1 0 75%',
                    borderRight: '1px solid #1F2A44',
                    paddingRight: '10px',
                    marginRight: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Box sx={{
                        width: '24px',
                        height: '24px',
                        marginRight: '6px',
                    }}>
                        <CountryIcon code={recipe.origin as CountryCode} />
                    </Box>
                    <Box>{recipe.name}</Box>
                </Box>
                <Box sx={{fontWeight: 700}}>
                    <DifficultyComponent  difficulty={recipe.difficulty} />
                </Box>
            </Box>
            <Box>{recipe.time ? `${recipe.time}min` : '-'}</Box>
        </Root>
    );
};
