import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useJobs = () => {
  const url = "https://shdcl-80a1145de3e6.herokuapp.com/api/v1/job";

  const {
    data: jobs = [],
    isLoading,
    refetch,
  } = useQuery(["jobs"], async () => {
    const res = await fetch(base_url+'/job', {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [ jobs, isLoading, refetch ];
};

export default useJobs;
