import { useEffect } from "react";
import { CoinSearchProfile } from "../../moleculs";
import { PortfolioCoin, FirebaseCoinData } from "../../../types";
import { Wrapper } from "./style";
import { useAppSelector } from "../../../redux/hooks";
import { writeData } from "../../../redux/thunks";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Span } from "../../atoms";
import { currencyFormatter } from "../../../helpers";

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
    <Wrapper>
      <div>
        <div className="heading">
          <CoinSearchProfile {...coin} />
          <Button
            $type="paginationButton"
            onClick={() => handleSetCoin({ uuid: "" })}
          >
            <AiOutlineClose />
          </Button>
        </div>
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
            onChange={(e) =>
              +e.target.value > 0 &&
              +e.target.value < 50000 &&
              handleSetCoin({ amount: +e.target.value })
            }
          />

          <div className="price-box">
            <Span type="heroSecondary" content={coin.symbol} />
            <Span
              type="heroPrimary"
              content={`USD ${currencyFormatter(
                coin.price,
                "yhjMzLPhuIDl"
              ).join("")}`}
            />
          </div>
          <Button className="add-btn" $type="loginButton" content="Add +" />
        </form>
      </div>
    </Wrapper>
  );
};

export default CoinAmount;
