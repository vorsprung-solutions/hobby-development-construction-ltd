import { base_url } from "../../../../config";

export const createBranch = async (data) => {
  const response = await fetch(base_url + "/branch", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};
