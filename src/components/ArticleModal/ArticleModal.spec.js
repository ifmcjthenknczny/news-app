import { render, screen } from "@testing-library/react";

import ArticleModal from "./ArticleModal";
import React from "react";
import { mockArticle } from "../../mocks";

describe("ArticleModal component", () => {
  test("renders article content and author", () => {
    render(<ArticleModal article={mockArticle} isOpen onClose={() => {}} />);

    expect(screen.getByText(mockArticle.content)).toBeInTheDocument();
    expect(
      screen.getByText(mockArticle.author)
    ).toBeInTheDocument();
  });

  test('renders "Read more" link to article source', () => {
    render(<ArticleModal article={mockArticle} isOpen onClose={() => {}} />);

    const linkElement = screen.getByRole("link", { name: /read more/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockArticle.url);
  });
});
