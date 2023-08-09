import React, {useState} from "react";
import './App.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme";
import {RecipeComponent} from "./components/recipe";
import {Recipe} from "./model";
import {Welcome} from "./components/welcome";
import {ControlPanel} from "./components/control-panel";

function App() {
    const [currentRecipe, setCurrentRecipe] = useState<Recipe | undefined>();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <ControlPanel
                    recipe={currentRecipe}
                    setCurrentRecipe={setCurrentRecipe}
                />
                <RecipeComponent recipe={currentRecipe} />
                {!currentRecipe && <Welcome />}
            </div>
        </ThemeProvider>
    );
}

export default App;
