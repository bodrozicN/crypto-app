import { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../../hooks";
import {
  useGetCoinsListAndMarketDataQuery,
  useGetSearchRecommendationsQuery,
} from "../../../redux/api";
import { useAppSelector } from "../../../redux/hooks";
import {
  PortfolioHeroProps,
  PortfolioCoin,
  FirebaseCoinData,
  PortfolioAsset,
  TCurrency,
} from "../../../types";
import { PortfolioTemplate } from "../../templates";
import {
  portfolioTableHead,
  portfolioValue,
  numberFormatter,
  createPortfolioCoinList,
} from "../../../helpers";
import { writeData, readData } from "../../../redux/thunks";

const Portfolio = () => {
  const userId = useAppSelector((state) => state.login.user?.uid);
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

  const [storedCoins, setStoredCoins] = useState<FirebaseCoinData[]>([]);

  const { coins } = useGetCoinsListAndMarketDataQuery(
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

  // in this state we store all coins data for displaying and calculations
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

  // in this stoate we store coins for displaying into portfolio table
  const [portfolioCoins, setCreatePortfolioCoins] = useState<
    PortfolioAsset[] | undefined
  >([]);

  const heroProps: PortfolioHeroProps = {
    isActiveElement,
    formProps,
    searchResult,
    // current portfolio value
    currentPortfolioValue: numberFormatter(
      portfolioValue(storedCoins, coins),
      "yhjMzLPhuIDl"
    ),
  };

  const storeCoinProps = {
    coin,
    storedCoins,
    handleAddCoin,
  };

  const tableProps = {
    portfolioCoins,
    portfolioTableHead,
    currency: "yhjMzLPhuIDl" as TCurrency,
    handleDeleteCoin,
  };

  useEffect(() => {
    setCreatePortfolioCoins(createPortfolioCoinList(storedCoins, coins));
  }, [storedCoins, coins]);

  // fetch from firebase stored coins
  useEffect(() => {
    readData(setStoredCoins, userId, "users/", "coins");
  }, [userId]);

  return (
    <>
      <PortfolioTemplate
        {...{
          heroProps,
          handleSetCoin,
          storeCoinProps,
          tableProps,
        }}
      />
    </>
  );
};

export default Portfolio;
