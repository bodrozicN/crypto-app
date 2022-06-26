import { useCallback, useEffect, useRef, useState } from "react";
import { handleDisplayComponent } from "../helpers";
import { FormProps } from "../types";
import { useDebounce } from "./";

export const useSearch = (className: string) => {
  const [value, setValue] = useState<string>("");
  const [isActiveElement, setIsActiveElement] = useState<boolean>(false);
  const debouncedValue = useDebounce(value, 500);

  const ref = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue((value) => (value = ""));
  }, []);

  useEffect(() => {
    handleDisplayComponent(document.body, className, setIsActiveElement);
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
    ref,
  };
};
