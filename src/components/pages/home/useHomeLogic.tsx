import { useFilters } from "../../../hooks";
import { useGetCoinsListAndMarketDataQuery } from "../../../redux/api";
import { coinTableHead } from "../../../helpers";

export const useHomeLogic = () => {
  const { handleSelect, ...props } = useFilters();

  const { coins, stats, isError } = useGetCoinsListAndMarketDataQuery(
    { ...props, offset: 0 },
    {
      selectFromResult: ({ data, isError }) => ({
        stats: data?.data.stats,
        coins: data?.data.coins,
        isError,
      }),
    }
  );

  const heroProps = {
    stats,
    handleSelect,
    currency: props.currency,
  };

  const tableProps = {
    coinsArr: coins,
    currency: props.currency,
  };

  return { heroProps, tableProps, handleSelect, coinTableHead, isError };
};
