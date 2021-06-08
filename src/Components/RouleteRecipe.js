import React, { useState, useEffect } from "react";
import { loadList } from "./api";
import Recipes from "./Recipes";
import RecipeList from "./RecipeList";


export default function RouleteRecipe() {
    let [breakfast, setBreakfast] = useState();
    let [lunch, setLunch] = useState();
    let [dinner, setDinner] = useState();
    let [randomBreakfast, setRandomBreakfast] = useState(0);
    let [randomLunch, setRandomLunch] = useState(0);
    let [randomDinner, setRandomDinner] = useState(0);
    let [flagWindow, setFlagWindow] = useState(false);
    let [flagWindow2, setFlagWindow2] = useState(false);
    let [flagWindow3, setFlagWindow3] = useState(false);

    function fetchRecipe() {
        loadList("").then(result => {
            setBreakfast(result.filter(item => item.type === 'завтрак'))
            setLunch(result.filter(item => item.type === 'обед'))
            setDinner(result.filter(item => item.type === 'ужин'))
        });
        setRandomBreakfast(Math.floor(Math.random() * (5 - 0)) + 0);
        setRandomLunch(Math.floor(Math.random() * (5 - 0)) + 0);
        setRandomDinner(Math.floor(Math.random() * (5 - 0)) + 0);
        setFlagWindow(false);
        setFlagWindow2(false);
        setFlagWindow3(false);
    }

    function breakRandom() {
        setRandomBreakfast(randomBreakfast + 1);
        if (randomBreakfast === 4) {
            setRandomBreakfast(0);
        }
    }

    function lunchRandom() {
        setRandomLunch(randomLunch + 1);
        if (randomLunch === 4) {
            setRandomLunch(0);
        }
    }

    function dinnerRandom() {
        setRandomDinner(randomDinner + 1);
        if (randomDinner === 4) {
            setRandomDinner(0);
        }
    }
    function flag() {
        setFlagWindow(!flagWindow)
    }
    function flag2() {
        setFlagWindow2(!flagWindow2)
    }
    function flag3() {
        setFlagWindow3(!flagWindow3)
    }
    return (
        <div className="container1">
            <div className="header">
            <RecipeList />
            </div>
            

            <button className="randomButton" onClick={fetchRecipe}>random</button>
            <img className="bodyImage" src="/img/132.jpeg" alt="img1" />
            {dinner ?
                <div className="recipes1">
                    <Recipes {...breakfast[randomBreakfast]} breakRandom={breakRandom} flagWindow={flagWindow} flag={flag} />
                    <Recipes {...lunch[randomLunch]} breakRandom={lunchRandom} flagWindow={flagWindow2} flag={flag2} />
                    <Recipes {...dinner[randomDinner]} breakRandom={dinnerRandom} flagWindow={flagWindow3} flag={flag3} />
                </div>
                : <p></p>
            }

        </div >
    )
}