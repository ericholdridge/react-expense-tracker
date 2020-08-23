import React, { useState, useEffect, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [history, setHistory] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState();
  const [select, setSelect] = useState("Income");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(incomeAmount - expenseAmount)
  }, [amountInput]);

  // Add the users input values to the history array
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(textInput && amountInput !== "") {
    // Add the values into an array of objects if the input fields are not blank
      setHistory([
        ...history,
        { expense: textInput, amount: amountInput, option: select },
      ]);
      // Calculate the income and expense amounts
      if (select === "Income") {
        setIncomeAmount((prevAmount) => prevAmount + amountInput);
      } else {
        setExpenseAmount((prevAmount) => prevAmount + amountInput);
      }
    } else {
      setErrorMsg("You must type a value into the fields. Please try again.");
    }
      // Clear the inputs values after the user submits the form
      setTextInput("");
      setAmountInput("");
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
        expenseAmount,
        errorMsg,
        select,
        total,
        setSelect,
        handleFormSubmit,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
