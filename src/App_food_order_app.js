import React, { useContext, useState } from "react";
import Cart from "./components_food_order/Cart/Cart";
import Header from "./components_food_order/Header/Header";
import Meals from "./components_food_order/Meals/Meals";
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
