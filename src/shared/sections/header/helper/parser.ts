import { fetchSearchRecommendation, CoinSearchResult } from "@/api/coinRanking";

export const getParsedSearchResults = async ({
  query,
}: {
  query: string;
}): Promise<CoinSearchResult[]> => {
  const response = await fetchSearchRecommendation({ query });
  const parsedCoinList = response.data.coins.map((coin) => ({
    ...coin,
    price: (+coin.price).toFixed(2),
  }));
  return parsedCoinList;
};
