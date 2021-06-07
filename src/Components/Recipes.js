import React from "react";

export default function Recipes({ imgrec, title, description, ingredients, breakRandom, flagWindow, flag,type }) {
    return (
        <>
            <div className="bodyRecipes">
                <img className="imgRecipeBody" src={imgrec} />
                <div className="nameRecipe">
                    <div className="titleButton">
                        <h4>{title}</h4>
                        <button className="buttonRandomRecipe" onClick={breakRandom}> сменить {type} </button>
                    </div>
                    <button className="buttonWindow" onClick={flag}>показать рецепт</button>
                    {flagWindow ?
                        <div>
                            <p className="recipeDescription">{description}</p>
                            <hr/>
                            <ul>
                                {ingredients.map((item) => (
                                    <li key={item.title}>{item.title} {item.amount} {item.units} </li>
                                ))}
                            </ul>
                        </div>
                        : <p></p>
                    }
                </div>
            </div>
            <hr/>
        </>
    )
}