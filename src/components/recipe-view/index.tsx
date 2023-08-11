import React, {useEffect, useState} from "react";
import {Recipe} from "../../model";
import {ControlPanel} from "../control-panel";
import {RecipeComponent} from "../recipe";
import {Welcome} from "../welcome";

export function RecipeView() {
    const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();

    const setRecipe = (recipe?: Recipe) => {
        setCurrentRecipe(recipe);

        if (chrome.storage) {
            chrome.storage.local.set({ currentRecipe: recipe }).then(() => {
                console.log("Value is set");
            });
        }
    };

    useEffect(() => {
        if (chrome.storage) {
            chrome.storage.local.get(['currentRecipe']).then(async (result: { currentRecipe?: Recipe | undefined }) => {
                if (result.currentRecipe) {
                    setCurrentRecipe(result.currentRecipe);
                    console.log("A recipe has been taken from storage: " + result.currentRecipe);
                }
            });
        }
    }, []);

    return (
        <>
            <ControlPanel
                recipe={currentRecipe}
                setCurrentRecipe={setRecipe}
            />
            <RecipeComponent recipe={currentRecipe}/>
            {!currentRecipe && <Welcome/>}
        </>
    );
}
