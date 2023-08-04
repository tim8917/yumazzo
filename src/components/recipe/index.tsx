import React from "react";
import styled from '@emotion/styled';
import {universalColors} from "../../themes/universal-colors";
import {CountryCode, CountryIcon} from "../country-icon";
import './recipe.css';

enum Difficulty {
    Easy,
    Medium,
    Hard,
}

interface Recipe {
    authenticity: string;
    name: string;
    cookingOil: string;
    description: string;
    difficulty: Difficulty;
    origin: string;
    protein: string;
    serves: number;
    spice: string;
    stock: string;
    volume: number;
}

interface IRecipeProps {
    recipe: Recipe;
}

const RecipeDescription = styled.div`
    background: ${universalColors.neutral_80};
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 24px;
`;

const ParentInner = styled.div`
    background: ${universalColors.teal_60};
    border-radius: 6px;
    padding: 10px 20px;   
`;

const RecipeDescriptionTitle = styled.h2`
    margin: 0 0 16px;
    color: ${universalColors.neutral_100};
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
`;

const RecipeDescriptionContent = styled.p`
    margin: 0;
`;

const RecipeTitle = styled.h2`
    color: ${universalColors.white};
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 24px;
`;

const RecipeName = styled.span`
    margin-left: 10px;
    line-height: 25px;
    vertical-align: -1px;
`;

const RecipeDetails = styled.div`
    background: ${universalColors.neutral_80};
    border-radius: 6px;
    padding: 13px 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 12px;
`;

const DetailsItemContainer = styled.div`
    min-width: 145px;
`;

const DetailsItemKey = styled.div`
    color: ${universalColors.neutral_20};
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
`;

const DetailsItemValue = styled.div`
    color: ${universalColors.white};
    font-size: 16px;
    font-weight: 500;
`;

interface IDetailsItemProps {
    name: string;
    value?: string | JSX.Element | number;
}

const DetailsItem: React.FC<IDetailsItemProps> = (props) => {
    const {name, value = '-'} = props;

    return (
        <DetailsItemContainer className="detailsItemContainer">
            <DetailsItemKey>{name}</DetailsItemKey>
            <DetailsItemValue className="detailsItemValue">{value}</DetailsItemValue>
        </DetailsItemContainer>
    );
};

export const Recipe: React.FC<IRecipeProps> = ({recipe}) => {
    return (
        <div>
            <RecipeTitle>
                <CountryIcon code={recipe.origin as CountryCode} />
                <RecipeName>{recipe.name}</RecipeName>
            </RecipeTitle>
            <RecipeDescription>
                <ParentInner>
                    <RecipeDescriptionTitle>{`Difficulty: ${Difficulty[recipe.difficulty]}`}</RecipeDescriptionTitle>
                    <RecipeDescriptionContent>{recipe.description}</RecipeDescriptionContent>
                </ParentInner>
            </RecipeDescription>
            <RecipeDetails>
                <DetailsItem
                    name="Protein"
                    value={<span>{recipe.protein}</span>}
                />
                <DetailsItem
                    name="Spice Level"
                />
                <DetailsItem
                    name="Spices"
                    value={recipe.spice}
                />
                <DetailsItem
                    name="Cooking Oil"
                    value={recipe.cookingOil}
                />
                <DetailsItem
                    name="Volume/Weight"
                    value={recipe.volume ? `${recipe.volume}g` : undefined}
                />
                <DetailsItem
                    name="Serves"
                    value={recipe.serves}
                />
                <DetailsItem
                    name="Authenticity"
                    value={recipe.authenticity}
                />
                <DetailsItem
                    name="Stock"
                    value={recipe.stock}
                />
            </RecipeDetails>
        </div>
    );
}
