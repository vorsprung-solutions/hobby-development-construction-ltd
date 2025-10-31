import { base_url } from "../config";

export const uploadImage = async (fileData) => {
  const formData = new FormData();
  formData.append("image", fileData);
  console.log(fileData);
  const response = await fetch(base_url + "/file/upload-image", {
    method: "POST",
    headers: {
      //   "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: formData,
  });

  const result = await response.json();
  if (result.success) {
    return result.data;
  }
  // return result;
};
