import classes from './ObrociProizvod.module.css';

import ObrociProizvodForma from './ObrociProizvodForma';

import { useContext } from 'react';

import CartContext from '../../../store/cart-context';

const ObrociProizvod = (props) => {
    const cartCtx = useContext(CartContext);


    const cena = `$${props.cena.toFixed(2)}`;




    const dodajuKarticuHandler = iznos => {
        cartCtx.addItem({
            id: props.id,
            ime: props.ime,
            opis: props.opis,
            iznos: iznos,
            cena: props.cena
        });
    };
    // gde pise cena mozda treba da stoji props.cena
    return (

        <li className={classes.meal}>

            <div>
                <h3>{props.ime}</h3>
                <div className={classes.description}>{props.opis}</div>

                <div className={classes.price}>{cena}</div>
            </div>

            <div>
                <ObrociProizvodForma dodajuKarticu={dodajuKarticuHandler} />
            </div>

        </li>


    );



};

export default ObrociProizvod;