import { base_url } from "../../../../config";

export const getSingleEmployee = async (id) => {
  const response = await fetch(base_url + `/employee/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
