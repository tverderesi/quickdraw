import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { RecoilRoot } from "recoil";

const TestComponent = () => (
  <div data-testid="test-component">Test Component</div>
);

test("renders the provided component inside the Outlet", () => {
  render(
    <RecoilRoot>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TestComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </RecoilRoot>
  );

  const testComponent = screen.getByTestId("test-component");
  expect(testComponent).toBeInTheDocument();
});
