export const routePaths = {
  HOME: () => "/",
  COIN: ({ coinId }: { coinId: string }) => `/coin/${coinId}`,
  PORTFOLIO: () => "/portfolio",
};
