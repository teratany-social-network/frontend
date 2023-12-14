import React from "react";
import { Link, useNavigate } from "react-router-dom";
import teratanyLogo from "assets/Teratany_ico/apple-touch-icon-180x180.png";
import FormField from "components/common/FormField";
import Button from "components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ErrorMessageForm from "components/common/ErrorMessageForm";
import { withAsync } from "helpers/withAsync";
import { registerAuth } from "api/AuthenticationApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import {
  UserInitialState,
  setAuthentication,
} from "store/reducer/user.reducer";
import jwtDecode from "jwt-decode";
import { AxiosError } from "axios";
import useLoadingButton from "hooks/useLoadingButton";
import { resetAccountConnected } from "store/reducer/account.reducer";
import { ErrorData, ThrowErrorHandler } from "helpers/HandleError";

interface signupFormValues {
  email: string;
  name: string;
  password: string;
}

const RegisterAuth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, startLoading, endLoading] = useLoadingButton();

  const initialValues: signupFormValues = {
    email: "",
    name: "",
    password: "",
  };

  const registerUser = async (values: signupFormValues) => {
    startLoading();
    const { error, response } = await withAsync(() =>
      registerAuth(values.email, values.name, values.password)
    );

    if (error instanceof AxiosError) {
      endLoading();
      ThrowErrorHandler(error as ErrorData);
      return;
    } else {
      endLoading();
      const token: string = String(response?.data);
      const user: UserInitialState = jwtDecode(token);
      dispatch(
        setAuthentication({
          id: user.id,
          name: user.name,
          email: user.email,
          token,
          isAuthenticated: true,
        })
      );
      dispatch(resetAccountConnected());
      navigate("/");
      toast.success("Account created successfully");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center py-16">
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
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  name: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                  password: Yup.string()
                    .matches(
                      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                      "Password must contain at least 8 characters with a capital letter and a number"
                    )
                    .required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    registerUser(values);
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <Form>
                  <div className="grid text-start gap-y-2">
                    <FormField
                      label="Email Address"
                      type="email"
                      mark="email"
                      height="py-3"
                      width="w-full"
                      extra={false}
                    />
                    <ErrorMessageForm name="email" />
                    <FormField
                      label="Name"
                      type="texte"
                      mark="name"
                      height="py-3"
                      width="w-full"
                      extra={false}
                    />
                    <ErrorMessageForm name="name" />
                    <FormField
                      label="Password"
                      type="password"
                      mark="password"
                      height="py-3"
                      width="w-full"
                      extra={false}
                    />
                    <ErrorMessageForm name="password" />
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
                    <Button
                      isLoading={isLoading}
                      width="px-4"
                      height="py-3"
                      name="Sign up"
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterAuth;
