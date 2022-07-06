import React from "react";
import { Wrapper } from "./style";
import { Heading, Span } from "../../../atoms";
import { Form, InputField } from "../../../moleculs";
import { PortfolioList } from "../../../organisms";
import {
  PortfolioHeroProps,
  PortfolioCoin,
  InputProps,
} from "../../../../types";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux";
import { FiSearch } from "react-icons/fi";

type Props = {
  heroProps: PortfolioHeroProps;
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
};

const PortfolioHero = ({ handleSetCoin, heroProps }: Props) => {
  const {
    isActiveElement,
    searchResult,
    currentPortfolioValue,
    formProps: { onChange, onSubmit, value },
  } = heroProps;

  const user = useAppSelector((state: RootState) => state.login.user);

  const inputProps: InputProps = {
    $type: "medium",
    type: "text",
    onChange,
    value,
    placeholder: "Search for an asset to add...",
    className: "add-asset-search",
    disabled: !user,
  };

  return (
    <Wrapper>
      <div>
        <Heading type="h1" title="My Portfolio" $isBold />
        <div>
          {currentPortfolioValue[0] && (
            <>
              <Heading
                type="h1"
                title={`${currentPortfolioValue[0]} ${currentPortfolioValue[1]}`}
                $isBold
              />
              <Span type="heroPrimary" content="Total value" />
            </>
          )}
        </div>
        <Form onSubmit={onSubmit}>
          <InputField input={inputProps} Icon={FiSearch} />
        </Form>
        {isActiveElement && user && (
          <PortfolioList {...{ searchResult, handleSetCoin }} />
        )}
      </div>
    </Wrapper>
  );
};

export default PortfolioHero;
