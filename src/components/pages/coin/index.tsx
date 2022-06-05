import { CoinHero, Header, ChartSection, CoinInfo } from "../../organisms";
import { Wrapper } from "./style";
import { useCoinLogic } from "./useCoinLogic";

const Coin = () => {
  const { chartSectionProps, coinHeroProps, coinInfoProps } = useCoinLogic();

  return (
    <>
      <Wrapper>
        <Header />
        <CoinHero {...coinHeroProps} />
      </Wrapper>
      <ChartSection {...chartSectionProps} />
      <CoinInfo {...coinInfoProps} />
    </>
  );
};

export default Coin;
