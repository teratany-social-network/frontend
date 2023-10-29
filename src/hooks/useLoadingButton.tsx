import { useState, useEffect } from "react";

type LoadingButtonHookReturnType = [
  boolean, // isLoading
  () => void, // startLoading
  () => void // setError
];

function useLoadingButton(): LoadingButtonHookReturnType {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRequestFinished, setIsRequestFinished] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setIsRequestFinished(false);

      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsRequestFinished(true);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading, isRequestFinished]);

  const startLoading = () => {
    setIsRequestFinished(false);
    setIsLoading(true);
  };

  const endLoading = () => {
    setIsRequestFinished(true);
    setIsLoading(false);
  };

  return [isLoading, startLoading, endLoading];
}

export default useLoadingButton;
