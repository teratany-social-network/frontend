import { ErrorMessage } from "formik";
import React from "react";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessageForm: React.FC<ErrorMessageProps> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  );
};

export default ErrorMessageForm;
