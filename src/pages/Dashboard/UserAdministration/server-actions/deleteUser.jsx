import { base_url } from "../../../../config";

export const deleteUser = async (id) => {
  const response = await fetch(base_url + `/user/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
