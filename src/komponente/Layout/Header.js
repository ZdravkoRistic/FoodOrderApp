import React from "react";

import HeaderKarticaDugme from './Header.KarticaDugme';

import obrociImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";




const Header = props => {

    return (

        <div>

            <header className={classes.header}>

                <h1>Vrste Jela</h1>
                <HeaderKarticaDugme onClick={props.onPrikaziKarticu} />

            </header>

            <div className={classes['main-image']}>

                <img src={obrociImage} alt="" />

            </div>


        </div>

    );

};


export default Header;