import React, {useState} from "react";
import './App.css';
import {ThemeProvider} from "@mui/material";
import {Search} from "./components/search";
import {theme} from "./themes/theme";
import {RecipeComponent} from "./components/recipe";
import {Recipe} from "./model";

function App() {
    const [currentRecipe, setCurrentRecipe] = useState<Recipe>();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Search setCurrentRecipe={setCurrentRecipe} />
                <RecipeComponent recipe={currentRecipe} />
            </div>
        </ThemeProvider>
    );
}

export default App;
