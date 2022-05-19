import { useEffect } from "react";
import { toggleTheme } from "../redux/features";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(({ theme }) => theme);
  const { getFromLocalStorage, setToLocalStorage } = useLocalStorage();

  const changeTheme = () => {
    dispatch(toggleTheme(!isDark));
    setToLocalStorage("isDarkTheme", !isDark);
  };

  useEffect(() => {
    const theme = getFromLocalStorage("isDarkTheme");
    theme && dispatch(toggleTheme(theme));
  }, [dispatch, getFromLocalStorage]);

  return { isDark, changeTheme };
}
