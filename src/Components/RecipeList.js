import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { loadList } from "./api";



export default function RecipeList() {
    let [arrRecipe, setArrRecipe] = useState([]);
    let [arr, setArr] = useState();

    function searchRecipe(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setArr(data.get('input'));
    }

    useEffect(() => {
        loadList(arr).then(result => setArrRecipe(result));
    }, [arr])

    return (
        <div>
            <form onSubmit={searchRecipe}>
                <input className="inputSearch" type="text" name="input"></input>
                <button>Поиск</button>
            </form>
            {arrRecipe.map((recipe) => (
                <li className="recipesBody" key={recipe._id}>
                    <Recipe {...recipe} /></li>
            ))}
        </div>
    )
}