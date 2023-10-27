import React from "react";
import FormField from "../../components/common/FormField";
import SwitchToggle from "../../components/common/switchToggle";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TopBar from "../../components/common/TopBar";

interface editGeneralPageFormValues {
  name: string;
  email: string;
  address: string;
  addressIsPrivate: Boolean;
}

const initialValues: editGeneralPageFormValues = {
  name: "",
  email: "",
  address: "",
  addressIsPrivate: true,
};

const EditGeneralPage: React.FC = () => {
  return (
    <>
      <TopBar text="Edit Profile" />
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
              label="Name"
              type="name"
              mark="name"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
            <FormField
              label="Email"
              type="email"
              mark="email"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
            <FormField
              label="Address"
              type="text"
              mark="text"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Forgot Password?"
            />
            <div className="flex items-start mt-4">
              <SwitchToggle label="Private Address" />
            </div>
          </Form>
        </Formik>
        <div className="my-10">
          <Button width="px-4" height="py-3" name="Save" />
        </div>
      </div>
    </>
  );
};
export default EditGeneralPage;
