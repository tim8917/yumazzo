import {Recipe} from "../model";
import {escapeRegExp} from "../utils/escape-for-regexp";

const GET_RECIPES_URL = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes';

interface RecipesRequest {
    nameContains?: string;
}

type RecipesResponse = Recipe[];

export const getRecipes = async (request: RecipesRequest): Promise<RecipesResponse> => {
    const {nameContains} = request;

    if (!nameContains) {
        return Promise.resolve([]);
    }

    const response = await fetch(GET_RECIPES_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    const data = await response.json();
    const escapedNameContains = escapeRegExp(nameContains);

    let result: Recipe[] = [];

    data?.message?.forEach((recipe: Recipe, index: number) => {
        if (new RegExp(escapedNameContains, 'i').test(recipe.name)) {
            recipe.id = index;
            result.push(recipe);
        }
    });

    result = result.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.name === value.name && t.origin === value.origin && t.difficulty === value.difficulty
        ))
    )

    return result;
};
