import CartContext from "./cart-context";

import { useReducer } from "react";

const defaultStanjeKartice = {
    items: [],
    ukupanIznos: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'DODAJ') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const noviUkupanIznos = state.ukupanIznos + action.item.cena * action.item.iznos;

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                ukupanIznos: existingCartItem.ukupanIznos + action.item.ukupanIznos
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {

            updatedItems = state.items.concat(action.item);

        };


        return {
            items: updatedItems,
            ukupanIznos: noviUkupanIznos
        };
    }

    if (action.type === "OBRISI") {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedUkupanIznos = state.ukupanIznos - existingItem.cena;
        let updatedItems;

        if (existingItem.ukupanIznos === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, ukupanIznos: existingItem.ukupanIznos - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        };
        return {
            items: updatedItems,
            ukupanIznos: updatedUkupanIznos

        };
    };

    return defaultStanjeKartice;
};



const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultStanjeKartice)

    const addItemtoCartHandler = item => {
        dispatchCartAction({ type: 'DODAJ', item: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'OBRISI', id: id });
    };

    const cartContext = {
        items: cartState.items,
        ukupanIznos: cartState.ukupanIznos,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;