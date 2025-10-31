import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useUser = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await fetch(base_url + `/user`);

    const data = await res.json();
    return data;
  });

  return [users, isLoading, refetch];
};

export default useUser;
