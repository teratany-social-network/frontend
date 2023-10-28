import React from "react";
import TopBar from "../../components/common/TopBar";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface addNewPageField {
  name: string;
  email: string;
  address: string;
  addressIsPrivate: Boolean;
}

const initialValues: addNewPageField = {
  name: "",
  email: "",
  address: "",
  addressIsPrivate: true,
};

const AddPageStep1: React.FC = () => {
  const navigate = useNavigate()


  return (
    <>
      <TopBar text="Add new page" />
      <div className="mt-16 overflow-y-scroll flex flex-col items-center mx-4">
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
              extraDesc="Name"
            />
            <FormField
              label="Email"
              type="email"
              mark="email"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Email"
            />
            <FormField
              label="Phone number"
              type="phone"
              mark="text"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Phone number"
            />
            <FormField
              label="website"
              type="url"
              mark="text"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Website"
            />
          </Form>
        </Formik>
        <div className="my-10">
          <Button width="px-4" height="py-3" name="Next step" onClick={() => navigate('/add-page/step-2')} />
        </div>
      </div>
    </>
  );
};

export default AddPageStep1;
