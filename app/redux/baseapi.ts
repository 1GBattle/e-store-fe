import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api",
});

const sleep = () => new Promise((result) => setTimeout(result, 1000));
type ErrorResponse = string | { title: string } | { errors: string[] };

export const baseQueryErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const router = useRouter();
  await sleep();
  const result = await customBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status, data } = result.error;

    const orgStatus =
      result.error.status === "PARSING_ERROR" && result.error.originalStatus
        ? result.error.originalStatus
        : result.error.status;

    const responseData = result.error.data as ErrorResponse;

    switch (orgStatus) {
      case 400:
        if (typeof responseData === "string") {
          toast.error(responseData);
        } else if ("errors" in responseData) {
          throw Object.values(responseData.errors).flat().join(", ");
        } else {
          toast.error(responseData.title);
        }
        break;
      case 401:
        typeof responseData === "object" && "title" in responseData
          ? toast.error(responseData.title)
          : toast.error(responseData as string);
        break;
      case 404:
        typeof responseData === "object" && "title" in responseData
          ? toast.error(responseData.title as string)
          : null;
        break;
      case 500:
        typeof responseData === "object"
          ? router.push("/error/server-error")
          : null;
        break;
      default:
        toast.error(responseData as string);
        break;
    }
  }

  return result;
};
