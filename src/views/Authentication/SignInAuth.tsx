import React from "react";
import { Link } from "react-router-dom";
import { withAsync } from "../../helpers/withAsync";
import { signinAuth } from "../../api/AuthenticationApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { setAuthentication } from "store/reducer/userReducer";
import { toast } from "react-toastify";
import teratanyLogo from "../../assets/Teratany_ico/apple-touch-icon-180x180.png";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";

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
    toast.info("🦄 Wow so easy!");
    const { response, error } = await withAsync(() => signinAuth());

    if (response) {
      console.log(response);
    } else {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm white:bg-gray-800 white:border-gray-700">
            <div className="flex justify-center">
              <img src={teratanyLogo} alt="" className=" w-20 h-20" />
            </div>
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 white:text-white">
                  Welcome back! Sign in to access.
                </h1>
                <p className="mt-2 text-sm text-gray-600 white:text-gray-400">
                  Don't have an account yet ?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium ml-1"
                    to="/register"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <form>
                  <div className="grid text-start gap-y-2">
                    <FormField
                      label="Email Address"
                      type="email"
                      mark="email"
                      height="py-3"
                      width="px-4"
                      extra={false}
                    />
                    <FormField
                      label="Password"
                      type="password"
                      mark="psswrd"
                      height="py-3"
                      width="px-4"
                      extra={true}
                      extraDesc="Forgot Password?"
                    />
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 white:bg-gray-800 white:border-gray-700 white:checked:bg-blue-500 white:checked:border-blue-500 white:focus:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor="remember-me"
                          className="text-sm white:text-white"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Button width="px-4" height="py-3" name="Sign in" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignInAuth;
