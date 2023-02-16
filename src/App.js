import React, { useState } from "react";

import Header from "./komponente/Layout/Header";

import Obroci from './komponente/Obroci/Obroci';

import Kartica from './komponente/Kartica/Kartica';

import CartProvider from "./store/cartProvider";




function App() {
  const [karticaSePojavljuje, podesiKarticuDaSePojavljuje] = useState(false);


  const prikaziKarticuHandler = () => {
    podesiKarticuDaSePojavljuje(true);
  };

  const sakriKarticuHandler = () => {
    podesiKarticuDaSePojavljuje(false);
  };



  return (

    <CartProvider>
      {karticaSePojavljuje && <Kartica onClose={sakriKarticuHandler} />}
      <Header onPrikaziKarticu={prikaziKarticuHandler} />
      <main>
        <Obroci />
      </main>
    </CartProvider>
  );
}

export default App;
