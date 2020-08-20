import React, { useState, useEffect, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [history, setHistory] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState();

  useEffect(() => {
    handleIncomeAmount();
  }, [history]);

  // Add the users input values to the history array
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add the values into an array of objects
    setHistory([
      ...history,
      { expense: textInput, amount: Number(amountInput) },
    ]);
    // Clear the inputs values after the user submits the form
    setTextInput("");
    setAmountInput("");
  };

  // Get the income amount
  const handleIncomeAmount = () => {
    history.map((num) => {
      if(num.amount > 0) {
        const x_sum = history.reduce((acc, num) => acc + num.amount, 0);
        return setIncomeAmount(x_sum);
      }
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        textInput,
        setTextInput,
        amountInput,
        setAmountInput,
        history,
        setHistory,
        incomeAmount,
        handleFormSubmit,
        handleIncomeAmount
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
