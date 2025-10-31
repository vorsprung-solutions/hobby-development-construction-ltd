export const titleFormat = (title) => {
  return title?.toLowerCase().replace(/\s+/g, "-");
};

export const formatToOriginalTitle = (name) => {
  // Split the string by hyphens, capitalize the first letter of each part, and join them with spaces
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
