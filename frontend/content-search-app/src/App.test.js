import { render, screen } from "@testing-library/react";
import App from "./App";

//creating a snapshot test to test if the rendered component is the same as the snapshot app
test("snapshot is correct", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});