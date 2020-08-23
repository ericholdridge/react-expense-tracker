/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";
const IncomeExpense = () => {
  const { incomeAmount, expenseAmount } = useContext(ExpenseContext);
  return (
    <div css={styles} className="incomeExpense">
      <div className="wrap">
        <h4>Income</h4>
        <span className="income">{incomeAmount}</span>
      </div>
      <div className="wrap">
        <h4>Expense</h4>
        <span className="expense">-{expenseAmount}</span>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0;
  .wrap {
    width: 100%;
    max-width: 220px;
    text-align: center;
    h4 {
      text-transform: uppercase;
      font-weight: 400;
    }
    .income {
      display: block;
      color: green;
    }
    .expense {
      display: block;
      color: red;
    }
  }
`;

export default IncomeExpense;
