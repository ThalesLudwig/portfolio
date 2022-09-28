import type { NextPage } from "next";
import { useState } from "react";
import {
  Banner,
  Container,
  Avatar,
  Title,
  Section,
  Bio,
  Contact,
  Navigator,
  Tab,
  Email,
  BannerInfo,
  EmailIcon,
  TypingWrapper,
} from "../styles/Home.styled";
import { getRandomAvatar } from "../helpers/getRandomAvatar";
import { useIntl } from "react-intl";
import localization from "../lang/localization";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { FiGithub, FiLinkedin, FiCodepen, FiMail } from "react-icons/fi";
import { TbBrandStackoverflow } from "react-icons/tb";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ReactTypingEffect from "react-typing-effect";

const Home: NextPage = () => {
  const { formatMessage } = useIntl();
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");

  return (
    <Container>
      <Header />
      <Banner>
        <TypingWrapper>
          <ReactTypingEffect
            text={formatMessage(localization.hero).split(".")}
            speed={70}
            eraseSpeed={30}
            eraseDelay={500}
            typingDelay={500}
          />
        </TypingWrapper>
        <BannerInfo>
          <a href="mailto:thales.ludwig@gmail.com" target="_blank" rel="noreferrer">
            <Email>thales.ludwig@gmail.com</Email>
          </a>
          <a href="mailto:thales.ludwig@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon>
              <FiMail size={20} />
            </EmailIcon>
          </a>
        </BannerInfo>
        <Avatar src={getRandomAvatar()} />
      </Banner>
      <Section>
        <Title>Thales Ludwig</Title>
        <Bio>{formatMessage(localization.bio)}</Bio>
        <Contact>
          <a href="https://github.com/ThalesLudwig" target="_blank" rel="noreferrer">
            <Button>
              <FiGithub />
              Github
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/thalesludwig/" target="_blank" rel="noreferrer">
            <Button>
              <FiLinkedin />
              Linkedin
            </Button>
          </a>
          <a href="https://codepen.io/thalesludwig" target="_blank" rel="noreferrer">
            <Button>
              <FiCodepen />
              Codepen
            </Button>
          </a>
          <a href="https://stackoverflow.com/users/8103847/thales-ludwig" target="_blank" rel="noreferrer">
            <Button>
              <TbBrandStackoverflow />
              Stack Overflow
            </Button>
          </a>
        </Contact>
      </Section>
      <Section>
        <Navigator>
          <Tab isActive={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
            {formatMessage(localization.projects)}
          </Tab>
          <Tab isActive={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
            {formatMessage(localization.skills)}
          </Tab>
        </Navigator>
        {activeTab === "projects" && <Projects />}
        {activeTab === "skills" && <Skills />}
      </Section>
    </Container>
  );
};

export default Home;
