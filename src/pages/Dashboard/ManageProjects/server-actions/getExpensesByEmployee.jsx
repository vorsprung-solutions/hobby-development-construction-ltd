import { base_url } from "../../../../config";

export const getExpensesByProject = async (employee) => {
  const response = await fetch(base_url + `/expense/employee-search/${employee}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};