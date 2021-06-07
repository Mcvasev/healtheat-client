import React from "react";
import RecipeList from "./Components/RecipeList";
import RecipePages from "./pages/RecipePages";
import RouleteRecipe from "./Components/RouleteRecipe";

import { Route } from "react-router-dom";


export default function App() {
    return (
        <div className = "container">
            <Route path="/" exact component={RouleteRecipe} />
            <Route path="/list" exact component={RecipeList} />
            <Route path="/recipe/:id" exact component={RecipePages} />
        </div>
    )
};