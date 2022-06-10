import React from "react";
import { Heading } from "../../atoms";
import { PriceBox, Stat } from "../../moleculs";
import { StyledCoinSupply } from "./style";
import { CoinSupply as TCoinSupply, TCurrency } from "../../../types";
import { nFormatter, dateFormatter, numberFormatter } from "../../../helpers";

type Props = {
  coinSupply: TCoinSupply;
  ath: {
    price: string;
    timestamp: number;
  };
};

const CoinSupply = ({ coinSupply, ath }: Props) => {
  const { circulatingAmount, circulatingSyncedAt, totalAmount, maxAmount } =
    coinSupply;
  const { price, timestamp: athDate } = ath;

  const [curr, coinAthPrice] = numberFormatter(price, "yhjMzLPhuIDl");

  return (
    <StyledCoinSupply>
      <Heading type="h4" title="CoinSupply" $isBold />
      <div>
        <Stat
          title="Total Supply"
          value={nFormatter(totalAmount, 2)}
          $switchColor
        />
        <Stat
          title="Max Amount"
          value={
            nFormatter(maxAmount, 2) === "0" ? "N/A" : nFormatter(maxAmount, 2)
          }
          $switchColor
        />
        <Stat
          title="Circulating Supply"
          value={nFormatter(circulatingAmount, 2)}
          $switchColor
        />
        <Stat
          title={"Circulating Supply Synced At"}
          value={dateFormatter(circulatingSyncedAt)}
          $switchColor
        />
      </div>
      <PriceBox
        date={dateFormatter(athDate)}
        price={`${curr} ${coinAthPrice}`}
        title="All time high"
      />
    </StyledCoinSupply>
  );
};

export default CoinSupply;
