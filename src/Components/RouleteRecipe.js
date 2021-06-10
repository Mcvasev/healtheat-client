import React, { useState, useEffect } from "react";
import { loadList, createSavedList, loadSavedList } from "./api";
import Recipes from "./Recipes";

import ButtonStyle from "./ButtonStyle";
import RecipeList from "./RecipeList";
import { Link } from "react-router-dom";
import { Button } from 'antd';


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
    let [flagLink, setFlagLink] = useState(false);
    let [serve_id, setServe_id] = useState('');


    function fetchRecipe(e) {
        console.log(e);
        e.preventDefault();

        console.log("hi")
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
        setFlagLink(false);
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

    async function saveList(e) {
        e.preventDefault();

        console.log("hi12321")
        const response = await createSavedList(breakfast[randomBreakfast]._id, lunch[randomLunch]._id, dinner[randomDinner]._id);
        setServe_id(response._id);
        setFlagLink(!flagLink)
    }

    function test() {
        console.log('123')
    }

    return (
        <div className="app">
            <div className="roulete">
                <div className={dinner ? "banner banner_list" : "banner"}>
                    <h1 className="banner-title"><Link className="logo" to={`/`} >HealthEat</Link></h1>
                    <p className="banner-description">Подбери рацион питания. Быстро.</p>
                    <ButtonStyle onClick={fetchRecipe} name={"Предложить рацион"} />
                </div>

                <div className={dinner ? "recipes1 recipes1_show" : "recipes1 recipes1_hidden"}>
                    {/* <button onClick={saveList}> Cохранить рацион</button> */}

                    {dinner ?
                        <>
                            <Recipes {...breakfast[randomBreakfast]} breakRandom={breakRandom} flagWindow={flagWindow} flag={flag} />
                            <Recipes {...lunch[randomLunch]} breakRandom={lunchRandom} flagWindow={flagWindow2} flag={flag2} />
                            <Recipes {...dinner[randomDinner]} breakRandom={dinnerRandom} flagWindow={flagWindow3} flag={flag3} />
                            {!flagLink ?
                                <ButtonStyle onClick={saveList} name={"Сохранить рацион"} />
                                : null
                            }
                            
                            {flagLink ? <Link to={`/lists/${serve_id}`} ><p>Перейти по ссылке</p></Link>
                                : null
                            }
                        </>
                        : null}
                </div>

            </div >

        </div>
    )
}