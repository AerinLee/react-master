import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Common/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const addAmountHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeAmountHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeAmountHandler.bind(null, item.id)}
          onAdd={addAmountHanlder.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
