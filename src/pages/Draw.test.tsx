import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { usePeople } from "../state/hooks/usePeople";
import { useDrawResults } from "../state/hooks/useDrawResults";
import Draw from "./Draw";

jest.mock("../state/hooks/usePeople", () => ({
  usePeople: jest.fn(),
}));

jest.mock("../state/hooks/useDrawResults", () => ({
  useDrawResults: jest.fn(),
}));

describe("on the draw page", () => {
  const participants = [
    "Anne",
    "Catherine",
    "Jackson",
    "July",
    "Joseph",
    "Nathalia",
  ];
  const results = new Map([
    ["Anne", "Joseph"],
    ["Catherine", "July"],
    ["Jackson", "Nathalia"],
    ["July", "Anne"],
    ["Joseph", "Catherine"],
    ["Nathalia", "Jackson"],
  ]);

  beforeEach(() => {
    (usePeople as jest.Mock).mockReturnValue(participants);
    (useDrawResults as jest.Mock).mockReturnValue(results);
  });

  test("the Secret Santa is displayed when requested", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const button = screen.getByRole("button", { name: "Draw" });
    fireEvent.click(button);

    const secretSanta = screen.getByRole("alert");
    expect(secretSanta).toMatchSnapshot();
  });
});
