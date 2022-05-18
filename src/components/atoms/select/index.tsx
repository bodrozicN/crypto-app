import React from "react";
//prettier-ignore
import {
  OCurrency, OOrderBy, OLimitPerPage, OOrderDirection, OTimePeriod,
} from "../../../types";
import { HeroSelect, BodySelect } from "./style";

type Props = {
  type:
    | "currencySelect"
    | "orderBySelect"
    | "limitSelect"
    | "orderDirectionSelect"
    | "timePeriodSelect";

  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ onChange, type }: Props) => {
  switch (type) {
    case "currencySelect":
      return (
        <HeroSelect role="select" onChange={onChange}>
          <option value={OCurrency.usd}>$ USD</option>
          <option value={OCurrency.eur}>€ EUR</option>
          <option value={OCurrency.btc}>BTC</option>
        </HeroSelect>
      );
    case "orderBySelect":
      return (
        <BodySelect role="select" onChange={onChange}>
          <option value={OOrderBy.marketCap}>Market cap</option>
          <option value={OOrderBy.price}>Price</option>
          <option value={OOrderBy["24hVolume"]}>Volume</option>
          <option value={OOrderBy.change}>Change</option>
        </BodySelect>
      );
    case "limitSelect":
      return (
        <BodySelect role="select" onChange={onChange}>
          <option value={OLimitPerPage.fifty}>50</option>
          <option value={OLimitPerPage.eighty}>80</option>
          <option value={OLimitPerPage.hundred}>100</option>
        </BodySelect>
      );
    case "orderDirectionSelect":
      return (
        <BodySelect role="select" onChange={onChange}>
          <option value={OOrderDirection.asc}>Ascending</option>
          <option value={OOrderDirection.desc}>Descending</option>
        </BodySelect>
      );
    case "timePeriodSelect":
      return (
        <BodySelect role="select" onChange={onChange}>
          <option value={OTimePeriod.daily}>24h</option>
          <option value={OTimePeriod.weekly}>7d</option>
          <option value={OTimePeriod.monthly}>1m</option>
          <option value={OTimePeriod.yearly}>1y</option>
        </BodySelect>
      );
  }
};

export default Select;
