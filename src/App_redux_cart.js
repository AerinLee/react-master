import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "./store/uiSlice";

import Cart from "./components_redux_cart/Cart/Cart";
import Layout from "./components_redux_cart/Layout/Layout";
import Products from "./components_redux_cart/Shop/Products";
import Notification from "./components_redux_cart/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cartItems);
  const notificationStatus = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending....",
          message: "Sending cart data...",
        })
      );
      const response = await fetch(
        "https://react-master-prj-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("somting wrong....");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Send cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: error,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
