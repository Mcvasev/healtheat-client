import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { loadList } from "./api";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default function RecipeList() {
    let [arrRecipe, setArrRecipe] = useState([]);
    let [arr, setArr] = useState('');

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
            <Splide className="slide" options={{
                rewind: true,
                width: 450,
                gap: '1rem',
            }}>
                {arrRecipe.map((recipe) => (
                    <SplideSlide className="recipesBody" key={recipe._id}>
                        <Recipe {...recipe} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}