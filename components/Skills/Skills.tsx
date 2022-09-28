import type { NextPage } from "next";
import { useIntl } from "react-intl";
import Card from "../Card/Card";
import { schools, localization, skills } from "./data";
import { Container, Pill, Pills } from "./Skills.styled";

const Skills: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      {schools.map((school, i) => {
        const description = localization[school.description];
        const name = localization[school.name];
        return <Card key={i} {...school} description={formatMessage(description)} name={formatMessage(name)} />;
      })}
      <Pills>
        {skills.map((skill, i) => (
          <Pill key={i}>{skill}</Pill>
        ))}
      </Pills>
    </Container>
  );
};

export default Skills;
