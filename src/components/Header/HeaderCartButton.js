import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../store/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlight, setBtnHighlight] = useState(false)
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnIsHighlight ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300 )

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
