import classes from "./CartButton.module.css";

import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.cartItems)
  let totalAmount = 0;
  for(let key in items){
    totalAmount += items[key].amount
  }

  const toggleCart = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
