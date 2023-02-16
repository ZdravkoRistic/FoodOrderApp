import classes from './DostupniObroci.module.css';

import Kartica from '../UI/Kartica';

import ObrociProizvod from './ObrociProizvod/ObrociProizvod';


const DUMMY_MEALS = [
    {
        id: 'm1',
        ime: 'Sushi',
        opis: 'Finest fish and veggies',
        cena: 22.99,
    },
    {
        id: 'm2',
        ime: 'Schnitzel',
        opis: 'A german specialty!',
        cena: 16.5,
    },
    {
        id: 'm3',
        ime: 'Barbecue Burger',
        opis: 'American, raw, meaty',
        cena: 12.99,
    },
    {
        id: 'm4',
        ime: 'Green Bowl',
        opis: 'Healthy...and green...',
        cena: 18.99,
    },
];



const DostupniObroci = () => {

    const listaObroka = DUMMY_MEALS.map(obrok =>
        <ObrociProizvod
            key={obrok.id}
            id={obrok.id}
            ime={obrok.ime}
            opis={obrok.opis}
            cena={obrok.cena}

        />);

    return (

        <section className={classes.meals}>

            <Kartica>
                <ul>
                    {listaObroka}
                </ul>
            </Kartica>

        </section>

    );
};

export default DostupniObroci;