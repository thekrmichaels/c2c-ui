function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function extractTitleAndDescription(message) {
    const startIndex = message.indexOf(":") + 2;
    const [title, description] = message.substring(startIndex).split("\n\n");

    return { title, description };
}

function getCommitterDate(committer) {
    const committerDate = new Date(committer.date);
    const committerMonth = committerDate.toLocaleString("default", { month: "long" });
    const committerYear = committerDate.getFullYear();

    return { committerMonth, committerYear };
}

export default function formatCommitData(commitData) {
    const { commit, html_url } = commitData;
    const { committer, message } = commit;
    const { title, description } = extractTitleAndDescription(message);
    const capitalizedTitle = capitalizeFirstLetter(title);
    const capitalizedDescription = capitalizeFirstLetter(description);
    const { committerMonth, committerYear } = getCommitterDate(committer);

    return {
        committerMonth,
        committerYear,
        description: capitalizedDescription,
        html_url,
        title: capitalizedTitle,
    };
}
