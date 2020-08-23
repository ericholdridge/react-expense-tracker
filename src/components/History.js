/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";

const History = () => {
  const { textInput, amountInput, history, setHistory } = useContext(
    ExpenseContext
  );
  return (
    <div css={styles} className="history">
      <div className="heading">
        <h3>History</h3>
        {history.map((expenseItem, index) => {
          return (
            <div
              key={index}
              className={expenseItem.option === "Income" ? "positive" : "negative"}
            >
              <span>{expenseItem.expense}</span>
              <span>{expenseItem.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 20px 0;
  .heading {
    h3 {
      width: 100%;
      font-size: 1.2rem;
      font-weight: 400;
      padding: 0 0 4px 0;
      border-bottom: 1px solid #ccc;
    }
    .positive {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 10px;
      margin: 6px 0;
      border-radius: 4px;
      border-right: 10px solid green;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      span {
        display: block;
        font-weight: 400;
      }
    }
    .negative {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 10px;
      margin: 6px 0;
      border-radius: 4px;
      border-right: 10px solid red;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      span {
        display: block;
        font-weight: 400;
      }
    }
  }
`;

export default History;
