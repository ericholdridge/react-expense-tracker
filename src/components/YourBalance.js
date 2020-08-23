/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ExpenseContext } from "./Context/Context";
import { useContext } from "react";

const YourBalance = () => {
  const {total} = useContext(ExpenseContext);
  return (
    <div css={styles}>
      <p>YOUR BALANCE</p>
      <span>{total.toFixed(2)}</span>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 600px;
  padding: 20px 0 0 0;
`;

export default YourBalance;
