import React from "react";
import { Link } from "react-router-dom";

export default function Recipe({ title,_id, imgrec }) {
    return (
        <>
            {title ? <div className="recipeSearch">
                <h1>{title}</h1>
                <Link to={`/recipe/${_id}`} ><img className="imgRecipeBody" src={imgrec} /></Link>
            </div> : <p></p>}
        </>
    )
}