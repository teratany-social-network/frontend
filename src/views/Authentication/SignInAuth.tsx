import React from "react";
import { withAsync } from "../../helpers/withAsync";
import { signinAuth } from "../../api/AuthenticationApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setAuthentication } from "../../store/reducer/userReducer";
import { toast } from "react-toastify";
const SignInAuth: React.FC = () => {
  const disptach = useDispatch<AppDispatch>();

  const signInUser = async () => {
    disptach(
      setAuthentication({
        id: "id",
        username: "nyhasina",
        token: "token",
        isAuthenticated: true,
      })
    );
    toast.info("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const { response, error } = await withAsync(() => signinAuth());

    if (response) {
      console.log(response);
    } else {
      console.log(error);
    }
  };

  return (
    <div>
      Sign in Auth <button onClick={signInUser}>Signin</button>
    </div>
  );
};

export default SignInAuth;
