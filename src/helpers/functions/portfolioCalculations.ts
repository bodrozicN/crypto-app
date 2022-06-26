import { CoinListData, PortfolioAsset, FirebaseCoinData } from "../../types";
import { currencyFormatter, percentFormatter } from "./numberFormatter";

function getCoinCurrentPrice(coins: CoinListData[] | undefined, uuid: string) {
  if (!coins) return 0;
  const coin = coins.find((coin) => coin.uuid === uuid);
  if (!coin) return 0;
  return +coin.price;
}

// return current portfolio value
export function portfolioValue(
  storedCoinsArr: FirebaseCoinData[],
  coins: CoinListData[] | undefined
) {
  if (!coins) return;
  const portfolioValue = storedCoinsArr.reduce((acc, coin) => {
    const currPrice = getCoinCurrentPrice(coins, coin.uuid);
    return currPrice ? acc + currPrice * coin.amount : acc;
  }, 0);

  return portfolioValue;
}

// how many portfolio is made with particular coin
export function coinShare(
  coins: CoinListData[] | undefined,
  uuid: string,
  storedCoinsArr: FirebaseCoinData[]
) {
  const amount = storedCoinsArr.find((coin) => coin.uuid === uuid)?.amount;
  if (!amount) return 0;
  const currentPrice = getCoinCurrentPrice(coins, uuid);
  const portfolio = portfolioValue(storedCoinsArr, coins);
  if (!portfolio) return 0;
  return ((currentPrice * amount) / portfolio) * 100;
}

// make coins array based on data from coinranking api and data from firebase
export function createPortfolioCoinList(
  storedCoinsArr: FirebaseCoinData[],
  coins: CoinListData[] | undefined
) {
  if (!coins) return;
  const portfolioCoins = storedCoinsArr.reduce(
    (acc: PortfolioAsset[], coin) => {
      const coinInfo = coins?.find((c) => c.uuid === coin.uuid);
      if (!coinInfo) return acc;
      const { uuid, name, price, iconUrl, symbol, rank } = coinInfo;
      const portfolioCoinData: PortfolioAsset = {
        uuid,
        iconUrl,
        name,
        rank,
        symbol,
        avgPrice: currencyFormatter(coin.price, "yhjMzLPhuIDl"),
        currentPrice: currencyFormatter(price, "yhjMzLPhuIDl"),
        pool: percentFormatter(coinShare(coins, uuid, storedCoinsArr)),
      };

      acc.push(portfolioCoinData);
      return acc;
    },
    []
  );

  return portfolioCoins;
}
