import { base_url } from "../../../../config";

export const getExpensesByProject = async (project) => {
  const response = await fetch(base_url + `/expense/project-search/${project}`, {
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
