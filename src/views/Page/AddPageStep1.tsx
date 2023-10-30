import React from "react";
import TopBar from "../../components/common/TopBar";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { InfoModal } from "../../components/common/InfoModal";
import useLoadingButton from "../../hooks/useLoadingButton";
import ErrorMessageForm from "../../components/common/ErrorMessageForm";

interface addNewPageField {
  name: string;
  email: string;
  phone: string;
  website: string;
  description: string;
}

const initialValues: addNewPageField = {
  name: "",
  email: "",
  phone: "",
  website: "",
  description: "",
};

const AddPageStep1: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, startLoading] = useLoadingButton();

  const addPageFirstStep = (values: addNewPageField) => {
    startLoading();
    setTimeout(() => {
      navigate("/page/add/step-2");
    }, 2000);
  };

  return (
    <>
      <TopBar text="Add new page" />
      <InfoModal
        title="Register your organization"
        text="Welcome to the page where you can register your association or business for CSR. You are invited to fill in the required information, except for those marked as optional. This information will only be made available to users to help them recognize you quickly and will not be used for advertising purposes under any circumstances."
      />

      <div className="mt-16 overflow-y-scroll flex flex-col items-center mx-4">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              addPageFirstStep(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="w-5/6">
            <label
              htmlFor="pageType"
              className="text-left block text-sm white:text-white my-2"
            >
              Your organization type
            </label>
            <select
              name="pageType"
              className="py-2 custom-border px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 white:bg-gray-800 white:border-gray-700 white:text-gray-400"
              id="pageType"
            >
              <option value="association">Association</option>
              <option value="entreprise">Entreprise</option>
            </select>
            <FormField
              label="Name"
              type="name"
              mark="name"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Name"
            />
            <ErrorMessageForm name="name" />

            <FormField
              label="Email"
              type="email"
              mark="email"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Email"
            />
            <ErrorMessageForm name="email" />

            <FormField
              label="Phone number"
              type="phone"
              mark="phone"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Phone number"
            />
            <ErrorMessageForm name="phone" />

            <FormField
              label="website (optional)"
              type="url"
              mark="website"
              height="py-2"
              width="w-full"
              extra={false}
              extraDesc="Website"
            />

            <label
              htmlFor="description"
              className="text-left block text-sm white:text-white my-2"
            >
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              className="py-2 custom-border px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 white:bg-gray-800 white:border-gray-700 white:text-gray-400 h-24 max-h-24"
              id="description"
            ></textarea>
            <div className="my-6 w-full">
              <Button
                isLoading={isLoading}
                width="w-full"
                height="py-3"
                name="Next step"
              />
              <button
                className="w-full text-gray-500 bg-white  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 mt-4"
                onClick={() => navigate("/user")}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddPageStep1;
