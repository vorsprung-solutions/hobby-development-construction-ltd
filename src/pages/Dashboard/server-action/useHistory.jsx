import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../config";

const useHistory = () => {
  const currentMonth = new Date().getMonth().toString();
  const currentYear = new Date().getFullYear;
  console.log(currentYear);
  const {
    data: history = [],
    isLoading,
    refetch,
  } = useQuery(["history"], async () => {
    const res = await fetch(
      base_url + `/dashboard/month-stat?month=01&year=2023`
    );

    const data = await res.json();
    return data;
  });

  return [history, isLoading, refetch];
};

export default useHistory;
