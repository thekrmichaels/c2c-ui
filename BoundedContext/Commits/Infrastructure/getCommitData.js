import { getAPIType } from "../Application/getAPIType";

async function fetchData(apiType, apiUrl) {
  const response = await fetch(apiUrl);

  if (!response.ok)
    throw new Error(apiType.errorMessage);

  return await response.json();
}

export default async function getCommitData(link) {
  const apiType = getAPIType(link);
  const apiUrl = apiType.apiUrl(link);

  return await fetchData(apiType, apiUrl);
}
