import React, {useState} from "react";
import {Recipe} from "../../model";
import {ControlPanel} from "../control-panel";
import {RecipeComponent} from "../recipe";
import {Welcome} from "../welcome";

export function RecipeView() {
    const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();

    return <>
        <ControlPanel
            recipe={currentRecipe}
            setCurrentRecipe={setCurrentRecipe}
        />
        <RecipeComponent recipe={currentRecipe}/>
        {!currentRecipe && <Welcome/>}
    </>;
}
