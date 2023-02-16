import classes from './ObrociProizvodForma.module.css';

import Input from '../../UI/Input';

import { useRef, useState } from 'react';


const ObrociProizvodForma = props => {
    const [iznosJeTacan, podesiIznosJeTacan] = useState(true);
    const iznosInputRef = useRef();

    const dodajHandler = event => {
        event.preventDefault();

        const unesenIznos = iznosInputRef.current.value;
        const unesenIznosBroj = +unesenIznos;

        if (unesenIznos.trim().length === 0 ||
            unesenIznosBroj < 1 ||
            unesenIznosBroj > 5) {
            podesiIznosJeTacan(false);
            return;
        }

        props.dodajuKarticu(unesenIznosBroj);

    };

    return (

        <form className={classes.form} onSubmit={dodajHandler}>

            <Input
                ref={iznosInputRef}
                label="Iznos" input={{
                    id: 'iznos',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>Dodaj</button>
            {!iznosJeTacan && <p>Molimo Vas unesite tacan iznos od 1-5 !</p>}

        </form>



    );

};

export default ObrociProizvodForma;