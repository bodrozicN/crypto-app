import { useEffect, useState } from "react";

export const useDebounce = (value: string, timing: number) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const debouncedValue = setTimeout(() => {
      setQuery(value);
    }, timing);

    return () => {
      clearTimeout(debouncedValue);
    };
  });

  return query;
};
