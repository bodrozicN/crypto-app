import BaseLayout from "@/shared/layout/baseLayout/BaseLayout";
import BaseBackground from "@/shared/layout/baseBackground/BaseBackground";
import style from "@/shared/sections/header/style.module.css";
import { NavLink } from "react-router-dom";
import { routePaths } from "@/router/routePaths";
import InputForm from "./components/inputForm/InputForm";
import { getParsedSearchResults } from "./helper/parser";
import { useApiRequest } from "@/hooks/useApiRequest";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const homePath = routePaths.HOME();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const debounceTimeoutId = useRef<number | null>(null);

  const { data } = useApiRequest({
    executor: {
      fetcher: () => getParsedSearchResults({ query: debouncedQuery }),
      deps: [debouncedQuery],
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  };

  useEffect(() => {
    if (debounceTimeoutId.current) {
      clearTimeout(debounceTimeoutId.current);
    }

    debounceTimeoutId.current = window.setTimeout(() => {
      setDebouncedQuery(() => query);
    }, 3000);
  }, [query]);

  return (
    <BaseBackground>
      <BaseLayout>
        <div className={style.header}>
          <NavLink to={homePath} className={style.navLink}>
            <span className={`${style.link} ${style.link__bold}`}>Crypto</span>
            <span className={`${style.link} ${style.link__light}`}>App</span>
          </NavLink>
          <div className={style.form}>
            <InputForm onInputChange={handleInputChange} />
          </div>
        </div>
      </BaseLayout>
    </BaseBackground>
  );
}
