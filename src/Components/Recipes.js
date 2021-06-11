import React from "react";

export default function Recipes({ imgrec, title, description, ingredients, breakRandom, flagWindow, flag, type }) {
    return (
        <div className="containerRec">
            <div className="bodyRecipes">
                <div className="nameRecipe">
                    <div className="titleButton">
                        <img className="imgRecipeBody" src={imgrec} />
                        <div className="headingRecipe">
                            <p className="zavtrak">{type}</p>
                            <h5 className="recipeName">{title}</h5>
                        </div>

                    </div>
                    <button className="buttonRandomRecipe" onClick={breakRandom}> сменить {type} </button>
                    <button className="buttonWindow" onClick={flag}>показать рецепт</button>
                    {flagWindow ?
                        <div className="showRecept">
                            <h3 className="h3class">Ингредиенты:</h3>
                            <ul>
                                {ingredients.map((item) => (
                                    <li className="ingredientsList" key={item.title}>{item.title} {item.amount} {item.units}</li>
                                ))}
                            </ul>
                            <h3 className="h3class">Рецепт:</h3>
                            <p className="recipeDescription">{description}</p>

                        </div>
                        : <p></p>
                    }
                </div>
            </div>
            <hr />
        </div>
    )
}