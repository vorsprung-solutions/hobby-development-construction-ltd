import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useIncome = () => {
  const {
    data: income = [],
    isLoading,
    refetch,
  } = useQuery(["income"], async () => {
    const res = await fetch(base_url + "/income", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [income, isLoading, refetch];
};

export default useIncome;
