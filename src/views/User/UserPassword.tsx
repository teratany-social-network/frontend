import React from "react";
import EditHeader from "../../components/common/HeaderEdit";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

interface editPasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const initialValues: editPasswordFormValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const EditUserPassword: React.FC = () => {
  return (
    <>
      <EditHeader name="Edit Password" />
      <div className="mt-20 flex flex-col items-center mx-4">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().min(1).required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              //   signInUser(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="w-3/4">
            <FormField
              label="Current password"
              type="text"
              mark="text1"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
            <FormField
              label="New password"
              type="password"
              mark="text2"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
            <FormField
              label="Confirm password"
              type="password"
              mark="text3"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
          </Form>
        </Formik>
        <div className="my-10">
          <Button width="px-4" height="py-3" name="Save" />
        </div>
      </div>
    </>
  );
};
export default EditUserPassword;
