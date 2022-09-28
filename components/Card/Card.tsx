import React from "react";
import Button from "../Button/Button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Container, Background, Wrapper, Title, Description, Buttons } from "./Card.styled";

type Props = {
  imageUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  name: string;
  description: string;
};

const Card: React.FC<Props> = ({ externalUrl, githubUrl, imageUrl, name, description }) => {
  return (
    <Container>
      <Background image={imageUrl} />
      <Wrapper>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Buttons>
          {!!githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Button>
                <FiGithub />
              </Button>
            </a>
          )}
          {!!externalUrl && (
            <a href={externalUrl} target="_blank" rel="noreferrer">
              <Button>
                <FiExternalLink />
              </Button>
            </a>
          )}
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Card;
