import {
  FirebaseCoinData,
  PortfolioCoin,
  PortfolioHeroProps,
  PortfolioTableProps,
} from "../../../types";

export type Props = {
  heroProps: PortfolioHeroProps;
  tableProps: PortfolioTableProps;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
  storeCoinProps: {
    coin: PortfolioCoin;
    storedCoins: FirebaseCoinData[];
    handleAddCoin: (coin: FirebaseCoinData) => void;
  };
};
