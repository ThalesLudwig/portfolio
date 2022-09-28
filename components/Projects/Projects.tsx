import type { NextPage } from "next";
import { useIntl } from "react-intl";
import Card from "../Card/Card";
import { data, localization } from "./data";
import { Container } from "./Project.styled";

const Projects: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      {data.map((project, i) => {
        const description = localization[project.description];
        return <Card key={i} {...project} description={formatMessage(description)} />;
      })}
    </Container>
  );
};

export default Projects;
