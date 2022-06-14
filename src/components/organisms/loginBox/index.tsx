import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { createUserAccount, logOut, logIn } from "../../../redux/features";
import { Overlay } from "./style";
import { UserCredentials } from "../../../types";

type Props = {
  setDisplayLoginBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginBox = ({ setDisplayLoginBox }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const [needToSignup, setNeedToSignup] = React.useState<boolean>(false);

  useEffect(() => {
    ref.current?.addEventListener("click", function (event) {
      const element = event.target as Element;
      if (!element.closest(".login-form")) setDisplayLoginBox(false);
    });
  }, [setDisplayLoginBox]);

  return (
    <Overlay ref={ref}>
      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <input
          type="email"
          placeholder="email"
          value={userCredentials.email}
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          value={userCredentials.password}
          onChange={(e) =>
            setUserCredentials({
              ...userCredentials,
              password: e.target.value,
            })
          }
        />
        {needToSignup ? (
          <button onClick={() => dispatch(createUserAccount(userCredentials))}>
            sign up
          </button>
        ) : (
          <button onClick={() => dispatch(logIn(userCredentials))}>
            log in
          </button>
        )}
        <button onClick={() => dispatch(logOut())}>logOut</button>
        <button onClick={() => setNeedToSignup(!needToSignup)}>
          {needToSignup ? "need to log in" : "need to sign up"}
        </button>
      </form>
    </Overlay>
  );
};

export default LoginBox;
