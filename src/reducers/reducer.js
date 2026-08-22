const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const LOADING = "LOADING";
const DISPLAY_ITEMS = "DISPLAY_ITEMS";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const id = action.payload.id;
    const newCart = new Map(state.cart);
    const targetedCartItem = newCart.get(id);
    const updatedCartItem = {
      ...targetedCartItem,
      amount: targetedCartItem.amount + 1,
    };
    newCart.set(id, updatedCartItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const id = action.payload.id;
    const newCart = new Map(state.cart);
    const targetedCartItem = newCart.get(id);
    if (targetedCartItem.amount < 2) {
      newCart.delete(id);
      return { ...state, cart: newCart };
    }
    const updatedCartItem = {
      ...targetedCartItem,
      amount: targetedCartItem.amount - 1,
    };
    newCart.set(id, updatedCartItem);
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }

  throw new Error(`no matching action type: ${action.type}`);
};
