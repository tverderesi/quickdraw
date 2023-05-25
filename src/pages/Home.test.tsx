import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { RecoilRoot } from "recoil";

describe("Home component", () => {
  test("renders Form and Participants components", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(screen.getByTestId("form-component")).toMatchSnapshot();
    expect(screen.getByTestId("participants-component")).toMatchSnapshot();
  });
});
