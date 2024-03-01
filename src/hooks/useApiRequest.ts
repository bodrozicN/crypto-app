import { useEffect, useState } from "react";

interface UseApiRequestParams<T> {
  ctx?: {
    onSuccessCb?: () => void;
    onErrorCb?: () => void;
    onFinalCb?: () => void;
  };
  executor: {
    fetcher: () => Promise<T>;
    deps?: React.DependencyList | undefined;
  };
}

export const useApiRequest = <T>({
  ctx: { onErrorCb, onFinalCb, onSuccessCb } = {},
  executor: { fetcher, deps },
}: UseApiRequestParams<T>) => {
  const [status, setStatus] = useState({
    failed: false,
    fetching: false,
    succeed: false,
  });

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus((prev) => ({ ...prev, fetching: true, failed: false }));
      try {
        const resData = await fetcher();
        setData(() => resData);
        if (onSuccessCb) {
          onSuccessCb();
        }
        setStatus((prev) => ({ ...prev, succeed: true }));
      } catch (error) {
        if (onErrorCb) {
          onErrorCb();
        }
        setStatus((prev) => ({ ...prev, failed: true }));
      } finally {
        if (onFinalCb) {
          onFinalCb();
        }
        setStatus((prev) => ({ ...prev, fetching: false }));
      }
    };
    fetchData();
  }, deps);

  return { status, data };
};
