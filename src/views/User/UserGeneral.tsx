import React from "react";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import TopBar from "../../components/common/TopBar";
import useFetchUser from "../../hooks/useFetchUser";
import { IUser } from "../../types/user.type";
import ErrorMessageForm from "../../components/common/ErrorMessageForm";
import { withAsync } from "../../helpers/withAsync";
import { updateGeneralInfo } from "../../api/UserApi";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";
import useLoadingButton from "../../hooks/useLoadingButton";

interface GeneralUserInfo {
  name: string | undefined;
  email: string | undefined;
}

const EditGeneralUser: React.FC = () => {
  const token = useToken();
  const user: IUser | undefined = useFetchUser();
  const [isLoading, startLoading, endLoading] = useLoadingButton();

  console.log("user => ", user);

  const initialValues: GeneralUserInfo = {
    name: user?.name,
    email: user?.contact?.email,
  };

  const updateUserGeneral = async (values: GeneralUserInfo) => {
    startLoading();
    const { error } = await withAsync(() =>
      updateGeneralInfo(token, user?._id, values.name, values.email)
    );
    if (error instanceof AxiosError) {
      endLoading();
      const error_message: string =
        error?.response?.data.description ||
        error?.response?.data ||
        error.message;
      toast.error(error_message);
    } else {
      endLoading();
      toast.success("General information updated!");
    }
  };

  return (
    <>
      <TopBar text="Edit Profile" />

      <div className="mt-20 flex flex-col items-center mx-4">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              updateUserGeneral(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {(
            formik // Utilisez la fonction useFormik fournie par Formik
          ) => (
            <form className="w-[90%]" onSubmit={formik.handleSubmit}>
              <FormField
                label="Name"
                type="name"
                mark="name"
                height="py-2"
                width="w-full"
                extra={false}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <ErrorMessageForm name="name" />
              <FormField
                label="Email"
                type="email"
                mark="email"
                height="py-2"
                width="w-full"
                extra={false}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <ErrorMessageForm name="email" />

              <div className="my-10 w-full">
                <Button
                  height="py-3"
                  width="w-full"
                  name="Save"
                  isLoading={isLoading}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default EditGeneralUser;
