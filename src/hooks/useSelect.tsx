import { useCallback } from "react";

export function useSelect<T>(
  setState: (value: React.SetStateAction<T>) => void
) {
  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;
      setState((prevValue) => ({ ...prevValue, [name]: value }));
    },
    [setState]
  );

  return handleSelect;
}
