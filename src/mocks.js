export const mockArticle = {
  author: "John Doe",
  title: "Example Article",
  description: "This is an example article",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim vel mi eleifend sagittis.",
  url: "https://example.com/article",
  urlToImage: "https://example.com/image.jpg",
  publishedAt: "2022-03-01T12:34:56Z",
  source: {
    id: "example-news",
    name: "Example News",
  },
};

const mockArticle2 = {
  author: "Jane Smith",
  title: "Example Article 2",
  description: "This is another example article",
  publishedAt: "2022-03-02T12:34:56Z",
  source: {
    name: "Another Example News",
  },
  urlToImage: "https://example.com/image2.jpg",
  url: "https://example.com/article2",
};

export const mockArticles = [mockArticle, mockArticle2]

export const articlesResponse = {
  status: 'ok',
  totalResults: 2,
  articles: mockArticles,
};