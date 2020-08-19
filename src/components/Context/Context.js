import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");
  const [amountInput, setAmountInput] = useState();
  const [history, setHistory] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ExpenseContext.Provider
      value={{ textInput, setTextInput, amountInput, setAmountInput, history, setHistory, handleFormSubmit }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
