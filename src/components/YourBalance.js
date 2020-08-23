/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ExpenseContext } from "./Context/Context";
import { useContext } from "react";

const YourBalance = () => {
  const {total} = useContext(ExpenseContext);
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
