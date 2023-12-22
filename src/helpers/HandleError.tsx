import { AxiosError } from "axios";
import { toast } from "react-toastify";

const UNEXPECTED_ERROR =
  "Une erreur est survenue, veuillez réessayer plus tard!";

export type ErrorData = {
  response: {
    data: {
      description: string;
    };
  };
};

export const ThrowErrorHandler = (error: ErrorData) => {
  if (error instanceof AxiosError) {
    const error_message =
      error?.response?.data?.error?.description ||
      error?.response?.data?.description ||
      error?.response?.data;
    error_message ? toast.error(error_message) : toast.error(UNEXPECTED_ERROR);
  }
};
