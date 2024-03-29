import React from "react";
import { Stat } from "../../moleculs";
import { Wrapper } from "./style";
import { CoinSupply as TCoinSupply } from "../../../types";
import { nFormatter, dateFormatter } from "../../../helpers";

const CoinSupply = (props: TCoinSupply) => {
  const { circulatingAmount, circulatingSyncedAt, maxAmount, totalAmount } =
    props;

  return (
    <Wrapper>
      <div>
        <Stat
          title="Total Supply"
          value={nFormatter(totalAmount, 2)}
          $switchColor
        />
        <Stat
          title="Max Amount"
          value={nFormatter(maxAmount, 2)}
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
    </Wrapper>
  );
};

export default CoinSupply;
