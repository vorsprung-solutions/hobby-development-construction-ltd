import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useEmployee = () => {

  const {
    data: employee = [],
    isLoading,
    refetch,
  } = useQuery(["employee"], async () => {
    const res = await fetch(base_url + "/employee", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [employee, isLoading, refetch];
};

export default useEmployee;
