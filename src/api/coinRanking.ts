const url = import.meta.env.VITE_APP_BASIC_URL!;

export const headers = {
  "x-rapidapi-host": import.meta.env.VITE_APP_X_RapidAPI_Host,
  "x-rapidapi-key": import.meta.env.VITE_APP_X_RapidAPI_Key,
};

const generateRequest = async <T>({
  queryParams,
}: {
  queryParams: string;
}): Promise<T> => {
  const res = await fetch(`${url}/${queryParams}`, { headers });
  return res.json();
};

export interface CoinSearchResult {
  uuid: string;
  iconUrl: string;
  name: string;
  symbol: string;
  price: string;
}

interface SearchResponse {
  data: {
    coins: CoinSearchResult[];
  };
}

export const fetchSearchRecommendation = ({ query }: { query: string }) => {
  return generateRequest<SearchResponse>({
    queryParams: `search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${query}`,
  });
};
