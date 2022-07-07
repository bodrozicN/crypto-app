import React, { useState, useRef, useEffect, useCallback } from "react";
import { Wrapper } from "./style";
import { InputProps, UserCredentials } from "../../../types";
import { Button, Heading, Span, LoadingSpinner } from "../../atoms";
import { Form, InputField } from "../../moleculs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { handleDisplayComponent } from "../../../helpers";
import { useAuth } from "../../../hooks/useAuth";

type Props = {
  displayLoginBoxCb: (bool?: boolean) => void;
};

const LoginBox = ({ displayLoginBoxCb }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const [needToSignup, setNeedToSignup] = React.useState<boolean>(false);

  const { createUserAccount, loginUser, isError, isSuccess, isLoading } =
    useAuth(userCredentials);

  const inputMail: InputProps = {
    $type: "small",
    type: "email",
    placeholder: "Email",
    value: userCredentials.email,
    onChange: (e) =>
      setUserCredentials({ ...userCredentials, email: e.target.value }),
  };

  const inputPassword: InputProps = {
    $type: "small",
    type: "password",
    placeholder: "Password",
    value: userCredentials.password,
    onChange: (e) =>
      setUserCredentials({
        ...userCredentials,
        password: e.target.value,
      }),
  };

  const handleSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      needToSignup ? createUserAccount() : loginUser();
    },
    [createUserAccount, loginUser, needToSignup]
  );

  useEffect(() => {
    handleDisplayComponent(ref?.current, ".login-form", displayLoginBoxCb);
  }, [displayLoginBoxCb]);

  useEffect(() => {
    displayLoginBoxCb(!isSuccess);
  }, [displayLoginBoxCb, isSuccess]);

  // if password.length < 6 or user already exist display error message
  let errMsg;
  if (userCredentials.password.length < 6)
    errMsg = "Password must have minimum 6 characters";
  else if (isError) errMsg = "Wrong credentials";
  else errMsg = "";

  return (
    <Wrapper ref={ref}>
      <Form className="login-form" onSubmit={handleSubmitForm}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Heading
              type="h4"
              title={needToSignup ? "Sign up" : "Log in"}
              $isBold
            />
            <InputField input={inputMail} Icon={HiOutlineMailOpen} />
            <InputField input={inputPassword} Icon={RiLockPasswordLine} />

            <Span className="error__msg" $type="heroPrimary" content={errMsg} />

            <Button
              type="submit"
              $type="loginButton"
              content={needToSignup ? "Sign up" : "Login"}
              disabled={userCredentials.password.length < 6}
            />

            <div onClick={() => setNeedToSignup(!needToSignup)}>
              <Span
                className="switch-wrapper"
                $type="heroPrimary"
                content={needToSignup ? "Need to login" : "Need to sign up"}
              />
            </div>
          </>
        )}
      </Form>
    </Wrapper>
  );
};

export default LoginBox;
