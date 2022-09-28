import { defineMessages } from "react-intl";

type Project = {
  imageUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  name: string;
  description: "cryptoPenguin" | "condofy" | "condofyServer" | "portfolio" | "journaly" | "moneyger" | "chatModuler";
};

export const localization = defineMessages({
  cryptoPenguin: { id: "cryptoPenguin" },
  condofy: { id: "condofy" },
  condofyServer: { id: "condofyServer" },
  portfolio: { id: "portfolio" },
  journaly: { id: "journaly" },
  moneyger: { id: "moneyger" },
  chatModuler: { id: "chatModuler" },
});

export const data: Project[] = [
  {
    name: "Crypto-Penguin",
    description: "cryptoPenguin",
    externalUrl: "https://crypto-penguin.vercel.app/",
    githubUrl: "https://github.com/ThalesLudwig/crypto-penguin",
    imageUrl: "/projects/cryptoPenguin.png",
  },
  {
    name: "Condofy",
    description: "condofy",
    externalUrl: "https://condofy.vercel.app/",
    githubUrl: "https://github.com/ThalesLudwig/condofy-web-react",
    imageUrl: "/projects/condofy.png",
  },
  {
    name: "Condofy (Server)",
    description: "condofyServer",
    githubUrl: "https://github.com/ThalesLudwig/condofy-server",
    imageUrl: "/projects/code.png",
  },
  {
    name: "Portfolio",
    description: "portfolio",
    externalUrl: "https://thalesludwig.vercel.app/",
    githubUrl: "https://github.com/ThalesLudwig/portfolio",
  },
  {
    name: "Journaly",
    description: "journaly",
    externalUrl: "https://play.google.com/store/apps/details?id=com.valentini.journaly",
    githubUrl: "https://github.com/ThalesLudwig/journaly-rn",
    imageUrl: "/projects/journaly.png",
  },
  {
    name: "Moneyger",
    description: "moneyger",
    externalUrl: "https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales",
    githubUrl: "https://github.com/ThalesLudwig/moneyger-rn",
    imageUrl: "/projects/moneyger.png",
  },
  {
    name: "Chat-moduler",
    description: "chatModuler",
    externalUrl: "https://www.npmjs.com/package/chat-moduler",
    githubUrl: "https://github.com/ThalesLudwig/chat-moduler",
    imageUrl: "/projects/code.png",
  },
];
