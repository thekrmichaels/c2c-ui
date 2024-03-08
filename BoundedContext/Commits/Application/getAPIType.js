import { githubAPIErrorMessage, githubAPIURL, githubLinkRegExp } from "../Domain/GitHub";

const apiTypes = {
    github: {
        apiUrl: githubAPIURL,
        errorMessage: githubAPIErrorMessage,
        regexPattern: githubLinkRegExp
    }
};

export function getAPIType(link) {
    const apiType = Object.keys(apiTypes).find(apiType => apiTypes[apiType].regexPattern.test(link)) || 'Tipo de API no reconocido';

    return apiTypes[apiType] || null;
}
