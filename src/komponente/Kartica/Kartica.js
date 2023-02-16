import classes from './Kartica.module.css';

import Model from '../UI/Model';

import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import CartItem from './KarticaItem';

const Kartica = props => {
    const cartCtx = useContext(CartContext);

    const ukupanIznos = `$${cartCtx.ukupanIznos.toFixed(2)}`;

    const ima_Proizvod_U_Korpi = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const karticaStvari = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) =>
            <CartItem
                key={item.id}
                ime={item.ime}
                iznos={item.iznos}
                cena={item.cena}
                onObrisi={cartItemRemoveHandler.bind(null, item.id)}
                onDodaj={cartItemAddHandler.bind(null, item)} />)}
    </ul>;

    return (

        <Model onClose={props.onClose}>
            {karticaStvari}
            <div className={classes.total}>
                <span>Ukupan iznos</span>
                <span>{ukupanIznos}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Zatvori</button>
                {ima_Proizvod_U_Korpi && <button className={classes.button}>Porudzbina</button>}
            </div>
        </Model>



    );

};

export default Kartica;