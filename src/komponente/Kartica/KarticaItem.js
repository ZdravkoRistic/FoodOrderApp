import classes from './KarticaItem.module.css';

const CartItem = (props) => {
  const cena = `$${props.cena.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.ime}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{cena}</span>
          <span className={classes.amount}>x {props.iznos}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onObrisi}>−</button>
        <button onClick={props.onDodaj}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
