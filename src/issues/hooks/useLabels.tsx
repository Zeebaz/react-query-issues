import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/labes";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>("/labels", {
    headers: {
      Authorization: null,
    },
  });
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 725156255,
        node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
        name: "good first issue (taken)",
        color: "b60205",
        default: false,
      },
      {
        id: 1109407645,
        node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        name: "Component: Suspense",
        color: "8ffcd6",
        default: false,
        description: "",
      },
    ],
  });

  return labelsQuery;
};

/* 



*/
