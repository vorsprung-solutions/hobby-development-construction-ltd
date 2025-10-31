import { base_url } from "../../../config";

export const deleteApplicant = async (id, jobId) => {
  const response = await fetch(base_url + `/application/${id}?jobId=${jobId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const result = await response.json();
  return result;
};
