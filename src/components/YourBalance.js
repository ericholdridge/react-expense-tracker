/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ExpenseContext } from "./Context/Context";
import { useContext } from "react";

const YourBalance = () => {
  const {history} = useContext(ExpenseContext);
    // Get the total amount
    const total = history.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div css={styles}>
      <p>YOUR BALANCE</p>
      <span>{total}</span>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 600px;
`;

export default YourBalance;
