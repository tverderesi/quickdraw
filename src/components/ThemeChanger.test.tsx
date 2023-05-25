import { render, fireEvent, screen } from "@testing-library/react";
import ThemeChanger from "./ThemeChanger";

describe("ThemeChanger", () => {
  beforeEach(() => {
    // Clear local storage before each test
    window.localStorage.clear();
  });

  it("should render the theme changer correctly", () => {
    render(<ThemeChanger />);
    const themeSelect = screen.getByLabelText("Theme");
    expect(themeSelect).toBeInTheDocument();
  });

  it("should change the theme when a new option is selected and store the theme value in local storage", () => {
    render(<ThemeChanger />);
    const themeSelect = screen.getByLabelText("Theme");

    fireEvent.change(themeSelect, { target: { value: "dark" } });

    // Assert the theme value is stored in local storage
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
