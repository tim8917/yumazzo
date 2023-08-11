import React, {useEffect} from "react";
import './App.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme";
import {RecipeView} from "./components/recipe-view";
import {Route, useLocation} from "wouter";
import {AddRecipeView} from "./components/add-recipe-view";

const PATH_HOME = '/';
const PATH_ADD_NEW_RECIPE = '/recipes/add';

function App() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        setLocation(PATH_HOME);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Route path={PATH_HOME} component={RecipeView} />
                <Route path={PATH_ADD_NEW_RECIPE} component={AddRecipeView} />
            </div>
        </ThemeProvider>
    );
}

export default App;
