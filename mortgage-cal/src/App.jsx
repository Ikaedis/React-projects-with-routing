import "./App.css";
import { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [loanTermInYears, setLoanTermInYears] = useState(0);

  return (
    <>
      <div className="input-fields">
        <h3>
          Loan Amount :
          <input
            type="number"
            placeholder="Loan Amount"
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
          />
        </h3>
        <h3>
          Annual interest rate (%) :
          <input
            type="number"
            placeholder="Annual interest rate (%)"
            onChange={(e) => {
              setAnnualInterestRate(e.target.value);
            }}
          />
        </h3>
        <h3>
          Loan term in years:
          <input
            type="number"
            placeholder="Loan term in years"
            onChange={(e) => {
              setLoanTermInYears(e.target.value);
            }}
          />
        </h3>
      </div>
      <div className="results-field">
        <h3>Monthly mortgage payment:</h3>
        <h3>Total payment amount:</h3>
        <h3>Total interest paid:</h3>
      </div>
    </>
  );
}

export default App;
