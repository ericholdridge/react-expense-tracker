/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";
const IncomeExpense = () => {
  const { incomeAmount } = useContext(ExpenseContext);
  return (
    <div css={styles} className="incomeExpense">
      <div className="wrap">
        <h4>Income</h4>
        <span>{incomeAmount}</span>
      </div>
      <div className="wrap">
        <h4>Expense</h4>
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
    span {
      display: block;
      color: green;
    }
  }
`;

export default IncomeExpense;
