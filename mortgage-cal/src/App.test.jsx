import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("updates loan amount state on input change", () => {
    const { getByPlaceholderText } = render(<App />);

    // Find the input field by its placeholder text
    const loanAmountInput = getByPlaceholderText("Loan Amount");

    // Simulate a change event on the input field
    fireEvent.change(loanAmountInput, { target: { value: "100000" } });

    // Assuming there's a way to assert the state directly, e.g., through a mock function or a wrapper component
    // For simplicity, let's assume we have a way to check the current state
    expect(App.state.loanAmount).toBe("100000");
  });
});
