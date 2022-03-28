import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.cartItems);

  const cartItems = Object.keys(items).map((key) => (
    <CartItem
      key={key}
      item={{
        title: key,
        quantity: items[key].amount,
        price: items[key].price,
        total: items[key].amount * items[key].price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
