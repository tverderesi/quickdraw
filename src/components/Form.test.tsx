import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

describe("Form", () => {
  test("should disable the button when the input is empty", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // Find the input element
    const input = screen.getByPlaceholderText("Add a participant");
    // Find the button element
    const addButton = screen.getByText("Add");

    // Ensure the input element is in the document
    expect(input).toBeInTheDocument();
    // Ensure the button element is disabled
    expect(addButton).toBeDisabled();
  });

  test("should add a participant if there is a filled name", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // Find the input element
    const input = screen.getByPlaceholderText("Add a participant");
    // Find the button element
    const addButton = screen.getByText("Add");

    // Enter a name in the input
    fireEvent.change(input, {
      target: {
        value: "John Doe",
      },
    });

    // Click the add button
    fireEvent.click(addButton);

    // Ensure the input field still has focus
    expect(input).toHaveFocus();
    // Ensure the input field is empty
    expect(input).toHaveValue("");
  });

  test("should not add duplicate names to the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // Find the input element
    const input = screen.getByPlaceholderText("Add a participant");
    // Find the button element
    const addButton = screen.getByText("Add");

    // Enter a name in the input
    fireEvent.change(input, {
      target: {
        value: "John Doe",
      },
    });

    // Click the add button
    fireEvent.click(addButton);

    // Enter the same name again in the input
    fireEvent.change(input, {
      target: {
        value: "John Doe",
      },
    });

    // Click the add button
    fireEvent.click(addButton);

    // Ensure the error message is displayed
    const errorMessageElement = screen.getByText(
      "Error! Nomes duplicados não são permitidos!"
    );
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("should hide the error message after a delay", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // Find the input element
    const input = screen.getByPlaceholderText("Add a participant");
    // Find the button element
    const addButton = screen.getByText("Add");

    // Enter a name in the input
    fireEvent.change(input, {
      target: {
        value: "John Doe",
      },
    });

    // Click the add button
    fireEvent.click(addButton);

    // Enter the same name again in the input
    fireEvent.change(input, {
      target: {
        value: "John Doe",
      },
    });

    // Click the add button
    fireEvent.click(addButton);

    // Ensure the error message is initially displayed
    let errorMessageElement = screen.getByText(
      "Error! Nomes duplicados não são permitidos!"
    );
    expect(errorMessageElement).toBeInTheDocument();

    // Advance the timers
    act(() => {
      jest.runAllTimers();
    });

    // Ensure the error message is hidden
    errorMessageElement = screen.queryByText(
      "Error! Nomes duplicados não são permitidos!"
    ) as HTMLElement;
    expect(errorMessageElement).toBeNull();
  });
});
