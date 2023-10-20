import React from "react";
import FormField from "./common/FormField";
import { Formik } from "formik";

const Home = () => {
  return (
    <div>
      Home
      <Formik
        initialValues={{
          name: "Ny Hasina",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(
          formik // Utilisez la fonction useFormik fournie par Formik
        ) => (
          <form onSubmit={formik.handleSubmit}>
            <FormField
              label="Name"
              type="name"
              mark="name"
              height="py-3"
              width="px-4"
              extra={false}
              value={formik.values.name} // Assurez-vous de lier la valeur du champ à la valeur de Formik
              onChange={formik.handleChange} // Utilisez handleChange pour gérer onChange
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
