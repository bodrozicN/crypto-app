import { useCallback, useEffect, useState } from "react";
import { handleShowSearchList } from "../helpers";
import { FormProps } from "../types";
import { useDebounce } from "./";

export const useSearch = (className: string) => {
  const [value, setValue] = useState<string>("");
  const [isActiveElement, setIsActiveElement] = useState<boolean>(false);
  const debouncedValue = useDebounce(value, 500);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue((value) => (value = ""));
  }, []);

  useEffect(() => {
    handleShowSearchList(setIsActiveElement, className);
  }, [className]);

  const formProps: FormProps = {
    onChange,
    value,
    onSubmit,
  };

  return {
    debouncedValue,
    formProps,
    isActiveElement,
  };
};
