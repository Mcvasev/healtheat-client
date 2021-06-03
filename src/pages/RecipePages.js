import React, { useEffect, useState } from "react";
import { loadRecipe } from "../Components/api";
import { Link } from "react-router-dom";

export default function RecipePages(props) {
    let [recipe, setRecipe] = useState();
    console.log(props.match.params.id)

    useEffect(() => {
        loadRecipe(props.match.params.id).then(result => setRecipe(result));
    }, [])

    console.log(recipe)
    return (
        <div>
            {recipe ?
                <div className="pagesContainer">
                    <Link to={`/`} >Домой</Link>
                    <h1>{recipe.title}</h1>
                    <h3>{recipe.description}</h3>
                    <img className="imgRecipePage" src={recipe.imgrec}/>
                    <ul>
                        {recipe.ingredients.map((item) => (
                            <li key = {item.title}>{item.title} {item.amount} {item.units}</li>
                        ))}
                    </ul>
                </div>
                :
                <p>Загрузка данных</p>
            }
        </div>
    )
}