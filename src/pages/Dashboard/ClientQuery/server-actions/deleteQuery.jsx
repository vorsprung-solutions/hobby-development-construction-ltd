import { base_url } from "../../../../config";

export const deleteQuery = async (id) => {
  const response = await fetch(base_url + `/query/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
