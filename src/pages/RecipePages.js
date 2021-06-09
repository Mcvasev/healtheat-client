import React, { useEffect, useState } from "react";
import { loadSavedList } from "../Components/api";
import { Link } from "react-router-dom";

export default function RecipePages(props) {
    let [recipe, setRecipe] = useState();

    useEffect(() => {
        loadSavedList(props.match.params.id).then(result => {
            setRecipe(result)
        });
    }, [])

    console.log(recipe)
    return (
        <div>
            <Link to={`/`} >Домой</Link>
            {recipe ?
                <div className="pagesContainer">
                    <div className="recipeContainer">
                        <h1>{recipe[0].title}</h1>
                        <img className="imgRecipePage" src={recipe[0].imgrec} />
                        <h3>Ингредиенты:</h3>
                        <ul>
                            {recipe[0].ingredients.map((item) => (
                                <li key={item.title}>{item.title} {item.amount} {item.units}</li>
                            ))}
                        </ul>
                        <h3>Рецепт:</h3>
                        <p>{recipe[0].description}</p>
                    </div>
                    <div className="recipeContainer">
                        <h1>{recipe[1].title}</h1>
                        <img className="imgRecipePage" src={recipe[1].imgrec} />
                        <h3>Ингредиенты:</h3>
                        <ul>
                            {recipe[1].ingredients.map((item) => (
                                <li key={item.title}>{item.title} {item.amount} {item.units}</li>
                            ))}
                        </ul>
                        <h3>Рецепт:</h3>
                        <p>{recipe[1].description}</p>
                    </div>
                    <div className="recipeContainer">
                        <h1>{recipe[2].title}</h1>
                        <img className="imgRecipePage" src={recipe[2].imgrec} />
                        <h3>Ингредиенты:</h3>
                        <ul>
                            {recipe[2].ingredients.map((item) => (
                                <li key={item.title}>{item.title} {item.amount} {item.units}</li>
                            ))}
                        </ul>
                        <h3>Рецепт:</h3>
                        <p>{recipe[2].description}</p>
                    </div>
                </div>
                :
                <p>Загрузка данных</p>
            }
        </div>
    )
}