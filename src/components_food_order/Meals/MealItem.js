import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const addToCartHanlder = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      price : props.price,
      amount : amount
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHanlder}></MealItemForm>
    </li>
  );
};

export default MealItem;
