import { useCallback, useEffect } from "react";
import { toggleTheme } from "../redux/features";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(({ theme }) => theme);
  const { getFromLocalStorage, setToLocalStorage } = useLocalStorage();

  const changeTheme = useCallback(() => {
    dispatch(toggleTheme(!isDark));
    setToLocalStorage("isDarkTheme", !isDark);
  }, [isDark, dispatch, setToLocalStorage]);

  useEffect(() => {
    const theme = getFromLocalStorage("isDarkTheme");
    theme && dispatch(toggleTheme(theme));
  }, [dispatch, getFromLocalStorage]);

  return { isDark, changeTheme };
}
