import { base_url } from "../../../../config";

export const getSingleProject = async (id) => {
  const response = await fetch(base_url + `/project/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
