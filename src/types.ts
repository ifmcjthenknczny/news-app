import { COUNTRY_CODES } from "./consts";

export interface NewsOkResponse {
  status: "ok";
  totalResults: number;
  articles: ArticleResponse[];
}

export type NewsErrorResponse = {
  status: "error";
  code: string;
  message: string;
};

export type ArticleResponse = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
};

export type CountryName = keyof typeof COUNTRY_CODES;
