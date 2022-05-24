import React from "react";
//prettier-ignore
import {
  OCurrency, OOrderBy, OLimitPerPage, OOrderDirection, OTimePeriod,
} from "../../../types";
import { HeroSelect, BodySelect } from "./style";
import { TFilter, OFIlter } from "../../../types";

type Props = {
  type: TFilter;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ onChange, type }: Props) => {
  switch (type) {
    case OFIlter.currency:
      return (
        <HeroSelect name="currency" role="listbox" onChange={onChange}>
          <option value={OCurrency.usd}>$ USD</option>
          <option value={OCurrency.eur}>€ EUR</option>
          <option value={OCurrency.btc}>BTC</option>
        </HeroSelect>
      );
    case OFIlter.sortBy:
      return (
        <BodySelect name="orderBy" role="listbox" onChange={onChange}>
          <option value={OOrderBy.marketCap}>Market cap</option>
          <option value={OOrderBy.price}>Price</option>
          <option value={OOrderBy["24hVolume"]}>Volume</option>
          <option value={OOrderBy.change}>Change</option>
        </BodySelect>
      );
    case OFIlter.rows:
      return (
        <BodySelect name="limit" role="listbox" onChange={onChange}>
          <option value={OLimitPerPage.fifty}>50</option>
          <option value={OLimitPerPage.hundred}>100</option>
          <option value={OLimitPerPage.eighty}>80</option>
        </BodySelect>
      );
    case OFIlter.order:
      return (
        <BodySelect name="orderDirection" role="listbox" onChange={onChange}>
          <option value={OOrderDirection.desc}>Descending</option>
          <option value={OOrderDirection.asc}>Ascending</option>
        </BodySelect>
      );
    case OFIlter.period:
      return (
        <BodySelect name="timePeriod" role="listbox" onChange={onChange}>
          <option value={OTimePeriod.daily}>24h</option>
          <option value={OTimePeriod.weekly}>7d</option>
          <option value={OTimePeriod.monthly}>1m</option>
          <option value={OTimePeriod.yearly}>1y</option>
        </BodySelect>
      );
  }
};

export default Select;
