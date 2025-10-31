import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useGallery = () => {
  const {
    data: gallery = [],
    isLoading,
    refetch,
  } = useQuery(["gallery"], async () => {
    const res = await fetch(base_url + "/gallery", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [gallery, isLoading, refetch];
};

export default useGallery;
