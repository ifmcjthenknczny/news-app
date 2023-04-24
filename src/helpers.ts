import {
  COUNTRY_CODES,
  DEFAULT_SORT_BY,
  EXCLUDED_DOMAINS,
  FLAG_API_URL,
  NEWS_API_URL,
  PAGE_SIZE,
} from "./consts";

import { CountryName } from "./types";

export const buildPhotoUrl = (name: string) => {
  const URL_TEMPLATE = "https://source.unsplash.com/random/200x200/";
  const searchPhrase = name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "+");
  return `${URL_TEMPLATE}?${searchPhrase}`;
};

export const encodeCountry = (country: string) =>
  country
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-");

export const decodeCountry = (country: string) =>
  country.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export const buildFlagUrl = (country: CountryName) => {
  return `${FLAG_API_URL}/${COUNTRY_CODES[country]}/shiny/32.png`;
};

export const buildNewsUrl = (countryCode: string) => {
  const excludedDomains = `&excludeDomains=${EXCLUDED_DOMAINS.join(",")}`;
  const sortBy = `&sortBy=${DEFAULT_SORT_BY}`;
  const pageSize = `&pageSize=${PAGE_SIZE}`;

  return `${NEWS_API_URL}?country=${countryCode}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}${excludedDomains}${sortBy}${pageSize}}`;
};

