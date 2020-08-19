/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const YourBalance = ({ overallBalanace }) => {
  return (
    <div css={styles}>
      <p>YOUR BALANCE</p>
      <span>{overallBalanace}</span>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 600px;
`;

export default YourBalance;
