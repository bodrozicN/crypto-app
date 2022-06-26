import { useCallback, useState } from "react";
import { Logo, Form, ThemeButton, InputField } from "../../moleculs";
import { Wrapper } from "./style";
import { List, LoginBox } from "../../organisms";
import { useGetSearchRecommendationsQuery } from "../../../redux/api";
import { useTheme, useSearch } from "../../../hooks";
import { Button } from "../../atoms";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux";
import { InputProps } from "../../../types";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const { logoutUser } = useAuth();
  const { user } = useAppSelector((state: RootState) => state.login);
  const [displayLoginBox, setDisplayLoginBox] = useState<boolean>(false);
  const { changeTheme } = useTheme();
  const {
    debouncedValue,
    isActiveElement,
    ref,
    formProps: { onChange, onSubmit, value },
  } = useSearch(".search-input");
  const { coins: searchList } = useGetSearchRecommendationsQuery(
    { query: debouncedValue },
    {
      selectFromResult: ({ data }) => ({
        coins: data?.data.coins,
      }),
    }
  );

  const inputProps: InputProps = {
    $type: "small",
    type: "text",
    onChange,
    value,
    placeholder: "Search...",
    className: "search-input",
  };

  const displayLoginBoxCb = useCallback((bool?: boolean) => {
    setDisplayLoginBox(Boolean(bool));
  }, []);

  return (
    <Wrapper>
      <div>
        <Logo value1="Crypto" value2="App" />
        <ThemeButton onClick={changeTheme} />

        <Button
          $type="loginButton"
          onClick={user ? logoutUser : displayLoginBoxCb}
          content={user ? "Logout" : "Login"}
        />
        <Form {...{ onSubmit }}>
          <InputField input={inputProps} Icon={FiSearch} ref={ref} />
        </Form>
        {isActiveElement && <List {...{ searchList }} />}
        {displayLoginBox && <LoginBox {...{ displayLoginBoxCb }} />}
      </div>
    </Wrapper>
  );
};

export default Header;
