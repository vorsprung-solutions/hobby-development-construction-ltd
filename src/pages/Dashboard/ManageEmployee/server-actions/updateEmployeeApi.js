import { base_url } from "../../../../config";

export const updateEmployeeApi = async (id, data) => {
  const response = await fetch(base_url + `/employee/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};
