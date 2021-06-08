import React from "react";

export default function Recipes({ imgrec, title, description, ingredients, breakRandom, flagWindow, flag, type }) {
    return (
        <div className="containerRec">
            <div className="bodyRecipes">
                <div className="nameRecipe">
                    <div className="titleButton">
                        <img className="imgRecipeBody" src={imgrec} />
                        <div>
                            <p>{type}</p>
                            <h5 className="recipeName">{title}</h5>
                            {/* <p>{ingredients.map((item) => (
                                 item.title
                                ))},</p> */}
                        </div>

                    </div>
                    <button className="buttonRandomRecipe" onClick={breakRandom}> сменить {type} </button>
                    <button className="buttonWindow" onClick={flag}>показать рецепт</button>
                    {flagWindow ?
                        <div>
                            <h3>Ингредиенты:</h3>
                            <ul>
                                {ingredients.map((item) => (
                                    <li key={item.title}>{item.title} {item.amount} {item.units} </li>
                                ))}
                            </ul>
                            <h3>Рецепт:</h3>
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