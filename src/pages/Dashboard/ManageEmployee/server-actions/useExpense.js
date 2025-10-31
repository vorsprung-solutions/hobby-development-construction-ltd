import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useExpense = () => {
  const url = "https://shdcl-80a1145de3e6.herokuapp.com/api/v1/employee";

  const {
    data: expense = [],
    isLoading,
    refetch,
  } = useQuery(["expense"], async () => {
    const res = await fetch(base_url + "/expense", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [expense, isLoading, refetch];
};

export default useExpense;
