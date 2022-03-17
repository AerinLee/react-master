import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //state : 언제나 최신의 데이터 snapshot
  if (action.type === "ADD_ITEM") {
    let updatedItems;
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIdx = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIdx];

    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIdx] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems;
    let existingItemIdx = state.items.findIndex(
      (item) => item.id === action.id
    );
    let existingItem = state.items[existingItemIdx];
    const updatedAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount > 1) {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items]
      updatedItems[existingItemIdx] = updateItem;
      
    } else {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
