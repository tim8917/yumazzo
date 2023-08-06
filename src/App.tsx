import './App.css';
import {ThemeProvider} from "@mui/material";
import {Search} from "./components/search";
import {theme} from "./themes/theme";
import {RecipeComponent} from "./components/recipe";

const recipe = {
    "name": "Spanish Paella",
    "origin": "sp",
    "description": "Spanish Paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.",
    "difficulty": 1,
    "protein": "Jumbo Shrimp",
    "produce": "Onion, Tomatoes",
    "spice": "Saffron",
    "cookingOil": "Olive Oil",
    "volume": 700,
    "serves": 4,
    "authenticity": "Unverified",
    "stock": "Chicken"
};

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <Search />
              <RecipeComponent recipe={recipe} />
          </div>
      </ThemeProvider>
  );
}

export default App;