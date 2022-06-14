import React, { useRef, useState } from "react";
import { Logo, Form, ThemeButton } from "../../moleculs";
import { StyledHeader } from "./style";
import { List, LoginBox } from "../../organisms";
import { useGetSearchRecommendationsQuery } from "../../../redux/api";
import { useTheme, useSearch } from "../../../hooks";
import { Button } from "../../atoms";

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayLoginBox, setDisplayLoginBox] = useState<boolean>(false);
  const { changeTheme } = useTheme();
  const { debouncedValue, isActiveElement, formProps } =
    useSearch(".searchInput");
  const { coins: searchList } = useGetSearchRecommendationsQuery(
    { query: debouncedValue },
    {
      selectFromResult: ({ data }) => ({
        coins: data?.data.coins,
      }),
    }
  );

  return (
    <StyledHeader>
      <div>
        <Logo value1="Crypto" value2="App" />
        <ThemeButton onClick={changeTheme} />
        <Button
          $type="loginButton"
          onClick={() => setDisplayLoginBox(true)}
          content="Login"
        />
        <Form
          $type="small"
          placeHolder="Search..."
          {...formProps}
          className="searchInput"
        />
        {isActiveElement && <List searchList={searchList} />}
        {displayLoginBox && (
          <LoginBox setDisplayLoginBox={setDisplayLoginBox} />
        )}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
