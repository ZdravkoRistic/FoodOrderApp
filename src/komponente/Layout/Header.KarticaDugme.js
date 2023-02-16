import KarticaIkonica from '../Kartica/KarticaIkonica';

import classes from './HeaderKarticaDugme.module.css';

import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';


const HeaderKarticaDugme = props => {
    const [dugmeJeIstaknuto, podesiDugmeJeIstaknuto] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const ukupan_Iznos_Proizvoda_Dodat_U_Karticu = items.reduce((trenutniBroj, item) => {
        return trenutniBroj + item.iznos;
    }, 0);



    const btnClasses = `${classes.button} ${dugmeJeIstaknuto ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        podesiDugmeJeIstaknuto(true);

        const tajmer = setTimeout(() => {
            podesiDugmeJeIstaknuto(false)
        }, 300);

        return () => {
            clearTimeout(tajmer);
        };

    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>

        <span className={classes.icon}>
            <KarticaIkonica />
        </span>

        <span>Tvoja Kartica</span>
        <span className={classes.badge}>{ukupan_Iznos_Proizvoda_Dodat_U_Karticu}</span>


    </button>


};

export default HeaderKarticaDugme;