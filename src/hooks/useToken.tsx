import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type GetTokenType = string;

function useToken(): GetTokenType {
  const token = useSelector<RootState, string>(
    (state) => state.teratany_user.token as string
  );

  return token;
}

export default useToken;
