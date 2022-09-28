import { defineMessages } from "react-intl";

type Project = {
  imageUrl?: string;
  externalUrl?: string;
  name: "graduation" | "specialization1" | "specialization2";
  description: "graduationDescription" | "specialization1Description" | "specialization2Description";
};

export const localization = defineMessages({
  graduation: { id: "graduation" },
  specialization1: { id: "specialization1" },
  specialization2: { id: "specialization2" },
  graduationDescription: { id: "graduationDescription" },
  specialization1Description: { id: "specialization1Description" },
  specialization2Description: { id: "specialization2Description" },
});

export const schools: Project[] = [
  {
    name: "graduation",
    description: "graduationDescription",
    imageUrl: "/education/education_1.png",
    externalUrl: "https://qi.edu.br/",
  },
  {
    name: "specialization1",
    description: "specialization1Description",
    imageUrl: "/education/education_2.png",
    externalUrl: "https://loja.uniritteronline.com.br/",
  },
  {
    name: "specialization2",
    description: "specialization2Description",
    imageUrl: "/education/education_3.png",
    externalUrl: "https://loja.uniritteronline.com.br/",
  },
];

export const skills: string[] = [
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "React Native",
  "NodeJS",
  "Angular 2+",
  "VueJS",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Jest",
  "Docker",
  "Web 3",
  "Moralis",
  "EthersJS",
  "Cypress",
  "Figma",
  "NextJS",
  "Express",
  "Prisma",
  "GraphQL",
];
