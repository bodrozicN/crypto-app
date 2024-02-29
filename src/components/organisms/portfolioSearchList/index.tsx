import { CoinSearchResult, PortfolioCoin } from "../../../types";
import { Wrapper } from "./style";
import { PortfolioSearchListItem } from "../../organisms";

type Props = {
  searchResult: CoinSearchResult[] | undefined;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioList = ({ searchResult, handleSetCoin }: Props) => {
  return (
    <Wrapper>
      {searchResult?.map((item) => {
        return (
          <PortfolioSearchListItem
            key={item.uuid}
            coin={item}
            handleSetCoin={handleSetCoin}
          />
        );
      })}
    </Wrapper>
  );
};

export default PortfolioList;
