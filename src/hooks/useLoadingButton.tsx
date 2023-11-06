import { useState } from "react";

type LoadingButtonHookReturnType = [
  boolean, // isLoading
  () => void, // startLoading
  () => void // setError
];

function useLoadingButton(): LoadingButtonHookReturnType {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const endLoading = () => {
    setIsLoading(false);
  };

  return [isLoading, startLoading, endLoading];
}

export default useLoadingButton;
