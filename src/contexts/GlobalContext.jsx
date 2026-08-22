import { createContext, useContext } from "react";
import useAppReducer from "../reducers/useAppReducer";
import { calcTotals } from "../utilityFunctions/utils";


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { state, clearCart, removeItem, increaseAmount, decreaseAmount } =
    useAppReducer();
  const { cart, loading } = state;
  const { totalAmount, totalCost } = calcTotals(state.cart);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        loading,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
