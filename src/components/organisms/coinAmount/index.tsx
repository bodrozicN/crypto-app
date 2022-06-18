import { useEffect } from "react";
import { CoinSearchProfile } from "../../moleculs";
import { PortfolioCoin, FirebaseCoinData } from "../../../types";
import { StyledCoinAmount } from "./style";
import { useAppSelector } from "../../../redux/hooks";
import { writeData } from "../../../redux/thunks";

type Props = {
  handleSetCoin: (values: Partial<PortfolioCoin>) => void;
  coin: PortfolioCoin;
  handleAddCoin: (coin: FirebaseCoinData) => void;
  storedCoins: FirebaseCoinData[];
};

const CoinAmount = ({
  handleSetCoin,
  coin,
  handleAddCoin,
  storedCoins,
}: Props) => {
  const { amount, price, uuid } = coin;
  const userId = useAppSelector((state) => state.login.user?.uid);

  useEffect(() => {
    writeData(userId, "coins", storedCoins, "users/");
  }, [userId, storedCoins]);

  return (
    <StyledCoinAmount>
      <div>
        <CoinSearchProfile {...coin} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCoin({ amount, uuid, price });
          }}
        >
          <input
            type="text"
            placeholder="amount"
            value={coin.amount}
            onChange={(e) => handleSetCoin({ amount: +e.target.value })}
          />
          <button type="submit">add to redux</button>
          <button onClick={() => handleSetCoin({ uuid: "" })}>close</button>
        </form>
      </div>
    </StyledCoinAmount>
  );
};

export default CoinAmount;
