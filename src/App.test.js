import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing renders in our react appliation", () => {
  render(<App />);
});

test("fake test", () => {
  expect(true).toBeTruthy;
});
