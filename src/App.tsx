import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {universalColors} from "./themes/universal-colors";
import {Search} from "./components/search";
import {Recipe} from "./components/recipe";

const theme = createTheme({
    components: {
        // Name of the component
        MuiInputBase: {
            styleOverrides: {
                // Name of the slot
                input: {
                    color: universalColors.white,
                    '&::placeholder': {
                        color: universalColors.neutral_20,
                    },

                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '150%',
                },
                root: {
                    border: `1px solid ${universalColors.neutral_60}`,
                    backgroundColor: '#131823',
                    '&::focus': {
                        border: `4px solid #B89FFF`
                    },
                    borderRadius: '6px',
                },

            },
        },
    },
});

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
              <Recipe recipe={recipe} />
          </div>
      </ThemeProvider>
  );
}

export default App;