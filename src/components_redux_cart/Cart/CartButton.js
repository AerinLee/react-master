import classes from "./CartButton.module.css";

import { cartActions } from "../../store/index_redux_cart";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
