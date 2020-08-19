/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

// Components
import YourBalance from "./components/YourBalance";
import History from "./components/History";
import Form from "./components/Form";
import { ExpenseProvider } from "./components/Context/Context";

function App() {
  return (
    <ExpenseProvider>
      <div className="App" css={styles}>
        <div className="heading">Expense Tracker</div>
        <div className="wrapper">
          <YourBalance />
          <History />
          <Form />
        </div>
      </div>
    </ExpenseProvider>
  );
}

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .heading {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

export default App;
