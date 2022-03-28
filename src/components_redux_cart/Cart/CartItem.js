import classes from "./CartItem.module.css";

import {  useDispatch } from "react-redux";
import { cartActions } from "../../store/index_redux_cart";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const increaseAmountHandler = () => {
    dispatch(
      cartActions.increaseAmount({
        itemId: title,
      })
    );
  };

  const decreaseAmountHandler = () => {
    dispatch(
      cartActions.decreaseAmount({
        itemId: title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseAmountHandler}>-</button>
          <button onClick={increaseAmountHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
