import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { getDatabase, ref, onValue } from "firebase/database";
import { FirebaseCoinData } from "../../../types";
import { Wrapper } from "./style";

type UserData = {
  isAdmin?: boolean;
  coins: FirebaseCoinData[];
};

type User = {
  userId: string;
  userData: UserData;
};

const SuperAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [popupCoins, setPopupCoins] = useState<FirebaseCoinData[] | undefined>(
    []
  );
  const [dipslayPopup, setDisplayPopup] = useState<boolean>(false);

  useEffect(() => {
    const db = getDatabase();

    const starCountRef = ref(db, "users/" + "" + "");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const users = Object.entries(data).map((userArr) => {
        const userData = userArr[1] as UserData;
        const userId = userArr[0];
        return {
          userId,
          userData,
        };
      });
      setUsers(users);
    });
  }, []);

  // console.log(users[0]?.userData.coins[0]);

  const displayPopupCoins = (id: string) => {
    const user = users.find((user) => user.userId === id);

    console.log(user?.userData.coins);
    setPopupCoins(user?.userData.coins);
    // setDisplayPopup(true);
  };

  return (
    <Wrapper>
      {popupCoins?.length && (
        <div className="popup">
          <div className="popup-container">
            <button
              onClick={() => {
                setPopupCoins([]);
              }}
            >
              close
            </button>
            {popupCoins?.map((coin) => {
              return <p key={uniqid()}>{JSON.stringify(coin)}</p>;
            })}
          </div>
        </div>
      )}
      <ul>
        {users.map(({ userId }, idx) => {
          return (
            <li key={uniqid()} onClick={() => displayPopupCoins(userId)}>
              {/* <span>{idx + 1}</span> */}
              <span>{userId}</span>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default SuperAdmin;
