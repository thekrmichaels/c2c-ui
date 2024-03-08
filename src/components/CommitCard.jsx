import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CommitCard({
  committerMonth,
  committerYear,
  description,
  html_url,
  title,
}) {
  return (
    <Card>
      <CardHeader>
        <Text as="b" fontSize="md">
          {title}
        </Text>
        <br />
        <Text fontSize="xs">
          {committerMonth}. {committerYear}
        </Text>
      </CardHeader>
      <CardBody>
        <Text fontSize="md">{description}</Text>
      </CardBody>
      <CardFooter>
        <Link href={html_url} isExternal>
          <Text fontSize="md" noOfLines={1}>
            {html_url}
          </Text>
        </Link>
      </CardFooter>
    </Card>
  );
}

CommitCard.propTypes = {
  committerMonth: PropTypes.string.isRequired,
  committerYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CommitCard;
