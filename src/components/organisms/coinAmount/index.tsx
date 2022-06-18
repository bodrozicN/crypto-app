import { useEffect } from "react";
import { CoinSearchProfile } from "../../moleculs";
import { CoinForStore, StoredCoinInfo } from "../../../types";
import { StyledCoinAmount } from "./style";
import { getDatabase, ref, set } from "firebase/database";
import { useAppSelector } from "../../../redux/hooks";

type Props = {
  handleSetCoinForStoring: (values: Partial<CoinForStore>) => void;
  coinForStore: CoinForStore;
  handleAddStoredCoin: (coin: StoredCoinInfo) => void;
  storedCoins: StoredCoinInfo[];
};

const CoinAmount = ({
  handleSetCoinForStoring,
  coinForStore,
  handleAddStoredCoin,
  storedCoins,
}: Props) => {
  const { amount, price, uuid } = coinForStore;
  const userId = useAppSelector((state) => state.login.user?.uid);

  useEffect(() => {
    function writeData(userId: string | undefined) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        coins: storedCoins,
      });
    }

    writeData(userId);
  }, [userId, storedCoins]);

  return (
    <StyledCoinAmount>
      <div>
        <CoinSearchProfile {...coinForStore} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddStoredCoin({ amount, uuid, price });
          }}
        >
          <input
            type="text"
            placeholder="amount"
            value={coinForStore.amount}
            onChange={(e) =>
              handleSetCoinForStoring({ amount: +e.target.value })
            }
          />
          <button type="submit">add to redux</button>
          <button onClick={() => handleSetCoinForStoring({ uuid: "" })}>
            close
          </button>
        </form>
      </div>
    </StyledCoinAmount>
  );
};

export default CoinAmount;
