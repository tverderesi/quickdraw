/* eslint-disable testing-library/prefer-screen-queries */

import { render, fireEvent } from "@testing-library/react";
import ThemeChanger from "./ThemeChanger";

describe("ThemeChanger", () => {
  beforeEach(() => {
    // Clear local storage before each test
    window.localStorage.clear();
  });

  it("should render the theme changer correctly", () => {
    const { getByLabelText } = render(<ThemeChanger />);

    const themeSelect = getByLabelText("Theme");
    expect(themeSelect).toBeInTheDocument();
  });

  it("should change the theme when a new option is selected and store the theme value in local storage", () => {
    const { getByLabelText } = render(<ThemeChanger />);

    const themeSelect = getByLabelText("Theme");

    fireEvent.change(themeSelect, { target: { value: "dark" } });

    // Assert the theme has changed
    // You can use your own implementation to check if the theme has changed based on the value selected

    // For example:
    // const bodyElement = document.body;
    // expect(bodyElement).toHaveClass("dark-theme");

    // Assert the theme value is stored in local storage
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
