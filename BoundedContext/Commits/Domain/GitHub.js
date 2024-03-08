const githubLinkRegExp = /github\.com\/([^/]+)\/([^/]+)\/commit\/([^/]+)/;

function githubAPIURL(link) {
    const match = link.match(githubLinkRegExp);
    const [, owner, repo, ref] = match;

    return `https://api.github.com/repos/${owner}/${repo}/commits/${ref}`;
}

const githubAPIErrorMessage = "No se pudo obtener la respuesta de la API de GitHub";

export { githubAPIErrorMessage, githubAPIURL, githubLinkRegExp }
