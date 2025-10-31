import { base_url } from "../config";

export const uploadFileToAWS = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(base_url + "/file/upload-file", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  console.log(result);
  return result;
  //   if (imgData.success) {
  //     return imgData.data.url;
  //   }
};
