import { useQuery } from "@tanstack/react-query";

const useProjectInfo = (id) => {
    const {
        data: query = [],
        isLoading,
        refetch,
    } = useQuery(["query"], async () => {
        const res = await fetch(`https://shdcl-80a1145de3e6.herokuapp.com/api/v1/project/${id}`);

        const data = await res.json();
        return data;
    });

    return [query.data, isLoading, refetch];
};

export default useProjectInfo;
