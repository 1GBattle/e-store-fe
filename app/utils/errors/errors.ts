import { toast } from "react-toastify";

const baseUrl = "https://localhost:5001/api/buggy";
let errorStatusCode = 400;

export const get400Error = async () => {
  const url = baseUrl + "/bad-request";
  return await fetch(url).then((res) => {
    errorStatusCode = res.status;
    errorHandler();
    return res;
  });
};

export const get401Error = async () => {
  const url = baseUrl + "/unauthorized";
  return await fetch(url).then((res) => {
    errorStatusCode = res.status;
    errorHandler();
    return res;
  });
};

export const get404Error = async () => {
  const url = baseUrl + "/not-found";
  return await fetch(url).then((res) => {
    errorStatusCode = res.status;
    errorHandler();
    return res;
  });
};

export const get500Error = async () => {
  const url = baseUrl + "/server-error";
  return await fetch(url).then((res) => {
    errorStatusCode = res.status;
    errorHandler();
    return res;
  });
};

export const getUnvalidatedError = async () => {
  const url = baseUrl + "/validation-error";
  return await fetch(url).then((res) => {
    errorStatusCode = res.status;
    errorHandler();
    return res;
  });
};

const errorHandler = () => {
  switch (errorStatusCode) {
    case 400:
      toast.error(
        "A 400 error has occured please check your request and try again.",
      );
      break;
    case 401:
      toast.error(
        "A 401 unvalidated error please make sure you have logged in and try again. ",
      );
      break;
    case 404:
      toast.error("Url not found please check the address and try again.");
      break;
    case 500:
      toast.error(
        "A server error has occured please check the url and try again.",
      );
      break;
    default:
      toast.error("An unknown error occurred. Please try again.");
      break;
  }
};
