import React, { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../../hooks";
import {
  useGetCoinsListQuery,
  useGetSearchRecommendationsQuery,
} from "../../../redux/api";
import {
  PortfolioHeroProps,
  PortfolioCoin,
  TCurrency,
  PortfolioTableProps,
  FirebaseCoinData,
  PortfolioAsset,
} from "../../../types";
import { PortfolioTemplate } from "../../templates";
import {
  portfolioTableHead,
  portfolioValue,
  currencyFormatter,
  createPortfolioCoinList,
} from "../../../helpers";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux";
import { readData, writeData } from "../../../redux/thunks";

const Portfolio = () => {
  const {
    debouncedValue: query,
    isActiveElement,
    formProps,
  } = useSearch(".add-asset-search");
  const { searchResult } = useGetSearchRecommendationsQuery(
    { query },
    {
      selectFromResult: ({ data }) => ({
        searchResult: data?.data.coins,
      }),
    }
  );

  const userId = useAppSelector((state: RootState) => state.login.user?.uid);

  // coins arr stored in firebase database
  const [storedCoins, setStoredCoins] = useState<FirebaseCoinData[]>([]);

  const { coins } = useGetCoinsListQuery(
    {
      currency: "yhjMzLPhuIDl",
      limit: storedCoins.length as any,
      offset: 0,
      query: storedCoins.map(({ uuid }) => uuid).join(","),
      orderBy: "24hVolume",
      orderDirection: "asc",
      timePeriod: "1y",
    },
    {
      selectFromResult: ({ data }) => ({
        coins: data?.data.coins,
      }),
    }
  );

  // add coin in firebase database
  const handleAddCoin = useCallback(
    (coin: FirebaseCoinData) => {
      const foundCoin = storedCoins.find(({ uuid }) => uuid === coin.uuid);
      if (foundCoin) {
        foundCoin.amount += coin.amount;
        foundCoin.price =
          (foundCoin.price * foundCoin.amount + coin.price * coin.amount) /
          (foundCoin.amount + coin.amount);
        const coinsArr = storedCoins.filter(({ uuid }) => uuid !== coin.uuid);
        setStoredCoins([...coinsArr, foundCoin]);
      } else {
        setStoredCoins([...storedCoins, coin]);
      }
    },
    [storedCoins]
  );

  const [portfolioCoins, setCreatePortfolioCoins] = useState<
    PortfolioAsset[] | undefined
  >([]);

  // delete coin from firebase
  const handleDeleteCoin = useCallback(
    (uuid: string | undefined) => {
      if (!uuid) return;
      const coinsArr = storedCoins.filter(
        ({ uuid: coinUuid }) => coinUuid !== uuid
      );
      setStoredCoins(coinsArr);
      writeData<FirebaseCoinData[]>(userId, "coins", coinsArr, "users/");
    },
    [storedCoins, userId]
  );

  // trigger useeffect when coins array is changed
  useEffect(() => {
    setCreatePortfolioCoins(() => createPortfolioCoinList(storedCoins, coins));
  }, [storedCoins, coins, userId]);

  useEffect(() => {
    userId && readData(setStoredCoins, userId, "users/", "coins");
  }, [userId]);

  // store data about coin for adding in portfolio
  const [coin, setCoin] = useState<PortfolioCoin>({
    uuid: "",
    price: 0,
    amount: 0,
    name: "",
    symbol: "",
    iconUrl: "",
  });

  const handleSetCoin = useCallback((values: Partial<PortfolioCoin>) => {
    setCoin((prev) => ({ ...prev, ...values }));
  }, []);

  const currentPortfolioValue = currencyFormatter(
    portfolioValue(storedCoins, coins),
    "yhjMzLPhuIDl"
  );

  const heroProps: PortfolioHeroProps = {
    isActiveElement,
    formProps,
    searchResult,
    currentPortfolioValue,
  };

  const storeCoinProps = {
    coin,
    storedCoins,
    handleAddCoin,
  };

  const tableProps: PortfolioTableProps = {
    coinsArr: portfolioCoins,
    tableHead: portfolioTableHead,
    currency: "yhjMzLPhuIDl" as TCurrency,
    handleDeleteCoin,
  };

  return (
    <PortfolioTemplate
      {...{
        heroProps,
        handleSetCoin,
        storeCoinProps,
        tableProps,
      }}
    />
  );
};

export default React.memo(Portfolio);
