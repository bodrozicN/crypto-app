import { RootState } from "../../../redux";
import { useAppSelector } from "../../../redux/hooks";
import { MessageContainer } from "../../moleculs";
import { PortfolioHero, CoinAmount, Table } from "../../organisms";
import { Props } from "./types";

const PortfolioTemplate = (props: Props) => {
  const { handleSetCoin, heroProps, storeCoinProps, tableProps } = props;

  const user = useAppSelector((state: RootState) => state.login.user);

  return (
    <>
      <PortfolioHero {...{ heroProps, handleSetCoin }} />
      {user ? (
        <Table type="portfolio" {...tableProps} />
      ) : (
        <MessageContainer content="Please login or create account" />
      )}
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
