import { getDatabase, ref, onValue } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../../hooks";
import {
  useGetCoinsListAndMarketDataQuery,
  useGetSearchRecommendationsQuery,
} from "../../../redux/api";
import { useAppSelector } from "../../../redux/hooks";
import {
  PortfolioHeroProps,
  CoinForStore,
  StoredCoinInfo,
} from "../../../types";
import { PortfolioTemplate } from "../../templates";

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

  const [storedCoins, setStoredCoins] = useState<StoredCoinInfo[]>([]);

  const { coins } = useGetCoinsListAndMarketDataQuery(
    {
      currency: "5k-_VTxqtCEI",
      limit: storedCoins.length as any,
      offset: 0,
      query: storedCoins.map(({ uuid }) => uuid).join(","),
      orderBy: "24hVolume",
      orderDirection: "asc",
      timePeriod: "1y",
    },
    {
      selectFromResult: ({ data, isError }) => ({
        stats: data?.data.stats,
        coins: data?.data.coins,
        isError,
      }),
    }
  );

  const handleAddStoredCoin = useCallback(
    (coin: StoredCoinInfo) => {
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

  const [coinForStore, setCoinForStore] = useState<CoinForStore>({
    uuid: "",
    price: 0,
    amount: 0,
    name: "",
    symbol: "",
    iconUrl: "",
  });

  const handleSetCoinForStoring = useCallback(
    (values: Partial<CoinForStore>) => {
      setCoinForStore((prev) => ({ ...prev, ...values }));
    },
    []
  );

  const heroProps: PortfolioHeroProps = {
    isActiveElement,
    formProps,
    searchResult,
  };

  // fetch from firebase stored coins
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + userId);
    onValue(starCountRef, (snapshot) => {
      const data: StoredCoinInfo[] = snapshot.val().coins;
      setStoredCoins([...data]);
    });
  }, [userId]);

  const coinStoreProps = {
    coinForStore,
    storedCoins,
    handleAddStoredCoin,
  };

  return (
    <>
      <PortfolioTemplate
        {...{
          heroProps,
          handleSetCoinForStoring,
          coinStoreProps,
        }}
      />
      {/* {coins?.map((coin) => {
        return <div key={coin.uuid}>{coin.name}</div>;
      })} */}
    </>
  );
};

export default Portfolio;
