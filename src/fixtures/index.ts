import {Recipe} from "../model";

export const RECIPE_FIXTURE = {
    "id": 123,
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

export const RECIPE_OPTIONS_FIXTURE: Recipe[] = [
    {
        "id": 1,
        "origin": "th",
        "name": "Thai Curry",
        "difficulty": 2,
        "time": 35,
    },
    {
        "id": 2,
        "origin": "in",
        "name": "Indian Curry",
        "difficulty": 1,
        "time": 30,
    },
    {
        "id": 3,
        "origin": "vn",
        "name": "Vietnamese Curry",
        "difficulty": 0,
        "time": 115,
    },
    RECIPE_FIXTURE
];
