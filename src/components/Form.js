/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";

const Form = () => {
  const {
    textInput,
    setTextInput,
    amountInput,
    setAmountInput,
    handleFormSubmit,
  } = useContext(ExpenseContext);

  return (
    <div css={styles} className="form">
      <div className="heading">
        <span>Add new transaction</span>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="inputWrap">
          <label htmlFor="">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <div className="inputWrap">
          <label htmlFor="">Amount</label>
          <span>(negative = expense, positive = income)</span>
          <input
            type="text"
            placeholder="Enter amount..."
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />
          <button type="submit">Add transaction</button>
        </div>
      </form>
    </div>
  );
};

const styles = css`
  width: 100%;
  .heading {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    span {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
    .inputWrap {
      display: flex;
      flex-direction: column;
      padding: 6px 0;
      span {
        padding: 0 0 6px 0;
      }
    }
    label {
      padding: 0 0 2px 0;
    }
    input {
      height: 40px;
      padding: 0 0 0 6px;
    }
    button {
      background: #354f79;
      color: #fff;
      padding: 12px 0;
      border: none;
      margin: 10px 0 0 0;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
  }
`;

export default Form;
