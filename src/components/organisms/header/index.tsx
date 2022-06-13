import React from "react";
import { Logo, Form, ThemeButton } from "../../moleculs";
import { StyledHeader } from "./style";
import { List } from "../../organisms";
import { useGetSearchRecommendationsQuery } from "../../../redux/api";
import { useTheme, useSearch } from "../../../hooks";

const Header = () => {
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
        <Form
          $type="small"
          placeHolder="Search..."
          {...formProps}
          className="searchInput"
        />
        {isActiveElement && <List searchList={searchList} />}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
