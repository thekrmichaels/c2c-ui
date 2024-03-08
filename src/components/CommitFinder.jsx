import { useState } from "react";
import { Input } from "@chakra-ui/react";
import CommitCard from "./CommitCard";
import formatCommitData from "../helpers/formatCommitData";
import getCommitData from "../../BoundedContext/Commits/Infrastructure/getCommitData";
import validateCommitLink from "../../BoundedContext/Commits/Application/validateCommitLink";

function CommitFinder() {
  const [commitData, setCommitData] = useState(null);
  const [commitLink, setCommitLink] = useState("");
  const [error, setError] = useState(null);
  const [isValidLink, setIsValidLink] = useState(true);

  async function handleInputChange(event) {
    const newCommitLink = event.target.value;
    const isValid = validateCommitLink(newCommitLink);

    setCommitLink(newCommitLink);
    setIsValidLink(isValid);

    try {
      if (newCommitLink.trim() !== "") {
        if (isValid) {
          const data = await getCommitData(newCommitLink);
          setCommitData(formatCommitData(data));
          setError(null);
        } else {
          setCommitData(null);
          setError(null);
        }
      } else {
        setCommitData(null);
        setError(null);
        setIsValidLink(true);
      }
    } catch (error) {
      setCommitData(null);
      setError(error.message);
    }
  }

  return (
    <>
      <Input
        type="text"
        value={commitLink}
        onChange={handleInputChange}
        placeholder="Introduce el enlace del commit de GitHub"
      />
      {!isValidLink && commitLink && <p>Enlace inválido</p>}
      {error && <p>{error}</p>}
      {commitData && <CommitCard {...commitData} />}
    </>
  );
}

export default CommitFinder;
