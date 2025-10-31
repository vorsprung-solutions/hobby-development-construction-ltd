import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useAllQuery = () => {
  const {
    data: query = [],
    isLoading,
    refetch,
  } = useQuery(["query"], async () => {
    const res = await fetch(base_url + "/query", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [query, isLoading, refetch];
};

export default useAllQuery;
