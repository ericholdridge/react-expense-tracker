/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

// Components
import YourBalance from "./components/YourBalance";
import History from "./components/History";
import Form from "./components/Form";
import { ExpenseProvider } from "./components/Context/Context";
import IncomeExpense from "./components/IncomeExpense";

function App() {
  return (
    <ExpenseProvider>
      <div className="App" css={styles}>
        <div className="heading"><h1>Expense Tracker</h1></div>
        <div className="wrapper">
          <YourBalance />
          <IncomeExpense />
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
  background: #F8F8F8;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .heading {
    font-weight: 600;
    h1 {
      font-size:1.6rem;
    }
  }
  .wrapper {
    width: 100%;
    max-width: 500px;
  }
`;

export default App;
