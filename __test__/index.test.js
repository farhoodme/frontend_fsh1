import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", async () => {

    render(<Home />);

    const heading = await screen.getByRole("heading", {
      name: /Home Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
