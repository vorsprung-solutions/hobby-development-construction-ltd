import { base_url } from "../../../../config";

export const createJob = async (data) => {
  const response = await fetch(base_url + "/job", {
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
