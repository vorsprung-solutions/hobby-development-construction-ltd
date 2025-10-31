import { base_url } from "../../../../config";

export const getSingleBranch = async (id) => {
  const response = await fetch(base_url + `/branch/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
