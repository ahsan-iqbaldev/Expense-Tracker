import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [

  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const saveToLocalStorage = (transactions) => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  const loadFromLocalStorage = () => {
    const storedTransactions = localStorage.getItem("transactions");
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };

  useEffect(() => {
    const storedTransactions = loadFromLocalStorage();
    if (storedTransactions.length > 0) {
      dispatch({ type: "LOAD_TRANSACTIONS", payload: storedTransactions });
    }
  }, []);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

    const updatedTransactions = [...state.transactions, transaction];
    saveToLocalStorage(updatedTransactions);
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
