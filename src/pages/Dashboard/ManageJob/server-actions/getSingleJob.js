import { base_url } from "../../../../config";

export const getSingleJob = async (id) => {
  const response = await fetch(base_url + `/job/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
