import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useBranch = () => {
  const url = "https://shdcl-80a1145de3e6.herokuapp.com/api/v1/branch";

  const {
    data: branch = [],
    isLoading,
    refetch,
  } = useQuery(["branch"], async () => {
    const res = await fetch(base_url+'/branch', {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [ branch, isLoading, refetch ];
};

export default useBranch;
