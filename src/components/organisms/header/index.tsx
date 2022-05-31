import React, { useCallback, useEffect, useState } from "react";
import { Logo, Form, ThemeButton } from "../../moleculs";
import { StyledHeader } from "./style";
import { List } from "../../organisms";
import { useGetSearchRecommendationsQuery } from "../../../redux/api";
import { handleShowSearchList } from "../../../helpers";
import { useDebounce, useTheme } from "../../../hooks";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [isActiveElement, setIsActiveElement] = useState<boolean>(false);
  const debouncedValue = useDebounce(query, 500);
  const { changeTheme } = useTheme();

  const { coins: searchList } = useGetSearchRecommendationsQuery(
    { query: debouncedValue },
    {
      selectFromResult: ({ data }) => ({
        coins: data?.data.coins,
      }),
    }
  );

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    []
  );

  useEffect(() => {
    handleShowSearchList(setIsActiveElement, ".searchInput");
  }, []);

  return (
    <StyledHeader>
      <div>
        <Logo value1="Crypto" value2="App" />
        <ThemeButton onClick={changeTheme} />
        <Form handleChangeInputValue={handleChangeInputValue} query={query} />
        {isActiveElement && <List searchList={searchList} />}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
