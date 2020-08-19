/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";

const Form = () => {
  const { textInput, setTextInput, amountInput, setAmountInput, handleFormSubmit } = useContext(
    ExpenseContext
  );

  return (
    <div css={styles} className="form">
      <div className="heading">
        <span>Add new transaction</span>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <div>
          <label htmlFor="">Amount</label>
          <span>(negative = expense, positive - income)</span>
          <input
            type="text"
            placeholder="Enter amount..."
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

const styles = css`
  width: 100%;
  .heading {
    border-bottom: 1px solid #ccc;
    span {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Form;
