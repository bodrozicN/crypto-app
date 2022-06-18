import React from "react";
import {
  PortfolioHeroProps,
  CoinForStore,
  StoredCoinInfo,
} from "../../../types";
import { PortfolioHero, CoinAmount } from "../../organisms";

type Props = {
  heroProps: PortfolioHeroProps;
  handleSetCoinForStoring: (values: Partial<CoinForStore>) => void;
  coinStoreProps: {
    coinForStore: CoinForStore;
    storedCoins: StoredCoinInfo[];
    handleAddStoredCoin: (coin: StoredCoinInfo) => void;
  };
};

const PortfolioTemplate = (props: Props) => {
  const { handleSetCoinForStoring, heroProps, coinStoreProps } = props;
  return (
    <>
      <PortfolioHero {...{ handleSetCoinForStoring, heroProps }} />
      {coinStoreProps.coinForStore.uuid && (
        <CoinAmount
          {...{
            handleSetCoinForStoring,
            ...coinStoreProps,
          }}
        />
      )}
    </>
  );
};

export default PortfolioTemplate;
