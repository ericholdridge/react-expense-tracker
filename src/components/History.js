/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { ExpenseContext } from "./Context/Context";

const History = () => {
  const {textInput, amountInput} = useContext(ExpenseContext);
  return (
    <div css={styles} className="history">
      <div className="heading">
        <span>History</span>
        <div>
          <span>{textInput}</span>
          <span>{amountInput}</span>
        </div>
      </div>
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
`;

export default History;
