import { githubLinkRegExp } from "../Domain/GitHub"

const regexArray = [githubLinkRegExp];

export default function validateCommitLink(link) {
    return regexArray.some(regex => regex.test(link));
}
