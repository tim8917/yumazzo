import React, {useEffect} from "react";
import './App.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme";
import {RecipeView} from "./components/recipe-view";
import {Route, useLocation} from "wouter";
import {AddRecipeView} from "./components/add-recipe-view";

function App() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        setLocation('/');
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Route path="/" component={RecipeView} />
                <Route path="/recipes/add" component={AddRecipeView} />
            </div>
        </ThemeProvider>
    );
}

export default App;
