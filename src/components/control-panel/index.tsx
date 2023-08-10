import React, {Dispatch, SetStateAction} from "react";
import {Recipe} from "../../model";
import {Box, Button} from "@mui/material";
import {Search} from "../search";
import styled from "@emotion/styled";
import {universalColors} from "../../themes/universal-colors";
import {CountryCode, CountryIcon} from "../country-icon";
import {Link} from "wouter";

interface IControlPanelProps {
    setCurrentRecipe: Dispatch<SetStateAction<Recipe | undefined>>;
    recipe?: Recipe;
}

const StatusPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${universalColors.white};
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    margin-left: 1px;
`;

const RecipeName = styled.span`
    margin-left: 10px;
    line-height: 25px;
    vertical-align: -1px;
`;

export const ControlPanel: React.FC<IControlPanelProps> = ({setCurrentRecipe, recipe}) => {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: '0px',
                padding: '24px 24px 12px',
                backgroundColor: universalColors.neutral_100,
                boxShadow: `0px 10px 7px -6px ${universalColors.neutral_100}`,

            }}
        >
            <Search setCurrentRecipe={setCurrentRecipe} />
            <StatusPanel>
                {recipe && (
                    <Box>
                        <CountryIcon code={recipe.origin as CountryCode} />
                        <RecipeName>{recipe.name}</RecipeName>
                    </Box>
                )}
                <Box
                    sx={{
                        marginLeft: 'auto',
                    }}
                >
                    <Link href="/recipes/add">
                        <Button
                            size="small"
                        >
                            + Add recipe
                        </Button>
                    </Link>
                </Box>
            </StatusPanel>
        </Box>
    );
};