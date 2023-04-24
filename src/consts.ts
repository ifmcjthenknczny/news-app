import { encodeCountry } from "./helpers";

export const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
export const FLAG_API_URL = "https://flagsapi.com";
export const APP_NAME = "NEWS-APP";
export const EXCLUDED_DOMAINS = ["tvp.pl", "tvp.info"];
export const PAGE_SIZE = 30;
export const DEFAULT_SORT_BY = "popularity";

export const COUNTRY_CODES = {
  "united states": "US",
  poland: "PL",
  argentina: "AR",
  australia: "AU",
  austria: "AT",
  belgium: "BE",
  brazil: "BR",
  bulgaria: "BG",
  canada: "CA",
  china: "CN",
  colombia: "CO",
  cuba: "CU",
  "czech republic": "CZ",
  egypt: "EG",
  france: "FR",
  germany: "DE",
  greece: "GR",
  "hong kong": "HK",
  hungary: "HU",
  india: "IN",
  indonesia: "ID",
  ireland: "IE",
  israel: "IL",
  italy: "IT",
  japan: "JP",
  latvia: "LV",
  lithuania: "LT",
  malaysia: "MY",
  mexico: "MX",
  morocco: "MA",
  netherlands: "NL",
  "new zealand": "NZ",
  nigeria: "NG",
  norway: "NO",
  philippines: "PH",
  portugal: "PT",
  romania: "RO",
  russia: "RU",
  "saudi arabia": "SA",
  serbia: "RS",
  singapore: "SG",
  slovakia: "SK",
  slovenia: "SI",
  "south africa": "ZA",
  "south korea": "KR",
  sweden: "SE",
  switzerland: "CH",
  taiwan: "TW",
  thailand: "TH",
  turkey: "TR",
  uae: "AE",
  ukraine: "UA",
  "united kingdom": "GB",
  venezuela: "VE",
};

export const ROUTES = {
  main: "/",
  content: (country?: string) =>
    country ? `/country/${encodeCountry(country)}` : `/country/:country`,
};

export const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
