import React from "react";
import { Link } from "react-router-dom";

export default function Recipe( { title, type, _id, imgrec } ) {
    return (
        <div>
            <h1>{title}</h1>
            {/* <h2>{type}</h2> */}
            <Link to={`/recipe/${_id}`} ><img className="imgRecipeBody" src = {imgrec} /></Link>
        
        </div>
    )
}