import { base_url } from "../config";

export const uploadFileToAws = async (fileData) => {
  const formData = new FormData();
  formData.append("file", fileData);

  const response = await fetch(base_url + "/file/upload-file", {
    method: "POST",
    headers: {
      //   "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: formData,
  });

  const result = await response.json();
  return result;
};
