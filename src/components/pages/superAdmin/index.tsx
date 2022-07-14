import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { FirebaseCoinData } from "../../../types";
import { Wrapper } from "./style";
import { useAppSelector } from "../../../redux/hooks";
import { getAuth, deleteUser } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../../../services";
import { writeData } from "../../../redux/thunks";

type UserData = {
  isAdmin?: boolean;
  coins: FirebaseCoinData[];
};

type User = {
  userId: string;
  userData: UserData;
};

const SuperAdmin = () => {
  const loggedUserUid = useAppSelector((state) => state.login.user?.uid);
  const adminId = "8oTyY58EPTMB7NhY0suaLOtvRlG3";
  const [users, setUsers] = useState<User[]>([]);
  const [popupCoins, setPopupCoins] = useState<FirebaseCoinData[] | undefined>(
    []
  );

  const [isAdminLogged, setIsAdminLogged] = useState(loggedUserUid === adminId);

  useEffect(() => {
    const db = getDatabase();

    const starCountRef = ref(db, "users/" + "" + "");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
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

  const displayPopupCoins = (id: string) => {
    const user = users.find((user) => user.userId === id);
    console.log(user?.userData.coins);
    setPopupCoins(user?.userData.coins);
  };

  const removeUser = async (id: string) => {
    let usersFiltered = users.filter((user) => user.userId !== id);

    console.log(usersFiltered);

    const usersArr = usersFiltered.map((user) => {
      const modifiedUser = {
        [user.userId]: {
          isAdmin: user.userData.isAdmin,
          coins: user.userData.coins,
        },
      };
      return modifiedUser;
    });

    console.log(...usersArr);

    setUsers(usersFiltered);
    const db = getDatabase();
    set(ref(db, "/"), {
      users: [...usersArr],
    });
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
        {users.map(({ userId, userData }, idx) => {
          return (
            <div key={uniqid()} className="user-uuid-container">
              <li onClick={() => displayPopupCoins(userId)}>
                <span>{userId}</span>
              </li>
              <button
                disabled={!isAdminLogged}
                onClick={() => removeUser(userId)}
              >
                delete if you are admin
              </button>
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default SuperAdmin;
