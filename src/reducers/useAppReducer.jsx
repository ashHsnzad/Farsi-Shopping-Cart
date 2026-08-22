import { useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const defaultState = {
  loading: false,
  cart: new Map(),
};

const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const LOADING = "LOADING";
const DISPLAY_ITEMS = "DISPLAY_ITEMS";

const url = "http://localhost:5000/products";

const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    state,
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
  };
};

export default useAppReducer;
