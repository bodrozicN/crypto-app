import { CoinHero, ChartSection, CoinInfo } from "../../organisms";
import { useCoinLogic } from "./useCoinLogic";

const Coin = () => {
  const { chartSectionProps, coinHeroProps, coinInfoProps } = useCoinLogic();

  return (
    <>
      <CoinHero {...coinHeroProps} />
      <ChartSection {...chartSectionProps} />
      <CoinInfo {...coinInfoProps} />
    </>
  );
};

export default Coin;
