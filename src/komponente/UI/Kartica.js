import classes from './Kartica.module.css';


const Kartica = props => {

    return (

        <div className={classes.card}>
            {props.children}
        </div>
    );

};

export default Kartica;