const paths = {
  HOME: () => "/",
  COIN: ({ coinId }: { coinId: string }) => `/coin/${coinId}`,
  PORTFOLIO: () => "/portfolio",
};
