import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../../config";

const useProject = () => {
  const url = "https://shdcl-80a1145de3e6.herokuapp.com/api/v1/project";

  const {
    data: projects = [],
    isLoading,
    refetch,
  } = useQuery(["projects"], async () => {
    const res = await fetch(base_url+'/project', {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    const data = await res.json();
    return data;
  });

  return [ projects, isLoading, refetch ];
};

export default useProject;
