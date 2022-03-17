import React, { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const toggleCartHanlder = () => {
    setCartIsShown(!cartIsShown)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={toggleCartHanlder}/>}
      <Header openCart={toggleCartHanlder}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
