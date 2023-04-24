import { render, screen } from "@testing-library/react";

import Article from "./Article";
import React from "react";
import { mockArticle } from "../../mocks";
import { useSelector } from "react-redux";

// mock useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Article component", () => {
  beforeEach(() => {
    useSelector.mockReturnValue("list");
  });

  test("renders the article in list mode", () => {
    render(<Article data={mockArticle} openModal={() => {}} />);

    const titleElement = screen.getByText("Example Article");
    expect(titleElement).toBeInTheDocument();

    const sourceNameElement = screen.getByText("Example News");
    expect(sourceNameElement).toBeInTheDocument();

    const descriptionElement = screen.queryByText("This is an example article");
    expect(descriptionElement).not.toBeInTheDocument();
  });

  test("renders the article in tile mode", () => {
    useSelector.mockReturnValue("tiles");

    render(<Article data={mockArticle} openModal={() => {}} />);

    const titleElement = screen.getByText("Example Article");
    expect(titleElement).toBeInTheDocument();

    const sourceNameElement = screen.getByText("Example News");
    expect(sourceNameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("");
    expect(imageElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("This is an example article");
    expect(descriptionElement).toBeInTheDocument();
  });
});
