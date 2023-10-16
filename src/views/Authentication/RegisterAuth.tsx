import React from "react";
import { Link } from "react-router-dom";
import teratanyLogo from "../../assets/Teratany_ico/apple-touch-icon-180x180.png";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";

const RegisterAuth: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center white:bg-slate-900 bg-gray-100 py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm white:bg-gray-800 white:border-gray-700">
          <div className="flex justify-center">
            <img src={teratanyLogo} alt="" className=" w-20 h-20" />
          </div>
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 white:text-white">
                Ready to get started? Sign up here!
              </h1>
              <p className="mt-2 text-sm text-gray-600 white:text-gray-400">
                Already have an account ?
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium ml-1"
                  to="/signin"
                >
                  Sign in here
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
                    label="Name"
                    type="texte"
                    mark="name"
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
                    extra={false}
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
                  <Button width="px-4" height="py-3" name="Sign up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterAuth;
