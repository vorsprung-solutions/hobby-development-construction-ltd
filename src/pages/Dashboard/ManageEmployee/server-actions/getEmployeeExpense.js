import { base_url } from "../../../../config";

export const getEmployeeExpense = async (id) => {
  const response = await fetch(base_url + `/expense/${id}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
