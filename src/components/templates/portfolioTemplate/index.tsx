import React from "react";
import {
  PortfolioHeroProps,
  PortfolioCoin,
  FirebaseCoinData,
  PortfolioAsset,
  TCurrency,
} from "../../../types";
import { PortfolioHero, CoinAmount, Table } from "../../organisms";

type Props = {
  heroProps: PortfolioHeroProps;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
  storeCoinProps: {
    coin: PortfolioCoin;
    storedCoins: FirebaseCoinData[];
    handleAddCoin: (coin: FirebaseCoinData) => void;
  };
  tableProps: {
    portfolioCoins: PortfolioAsset[] | undefined;
    portfolioTableHead: string[];
    currency: TCurrency;
    handleDeleteCoin: (uuid: string | undefined) => void;
  };
};

const PortfolioTemplate = (props: Props) => {
  const { handleSetCoin, heroProps, storeCoinProps, tableProps } = props;
  const { currency, portfolioCoins, portfolioTableHead, handleDeleteCoin } =
    tableProps;

  return (
    <>
      <PortfolioHero {...{ handleSetCoin, heroProps }} />
      <Table
        type="portfolio"
        coinsArr={portfolioCoins}
        tableHead={portfolioTableHead}
        currency={currency}
        handleDeleteCoin={handleDeleteCoin}
      />
      {storeCoinProps.coin.uuid && (
        <CoinAmount
          {...{
            handleSetCoin,
            ...storeCoinProps,
          }}
        />
      )}
    </>
  );
};

export default PortfolioTemplate;
