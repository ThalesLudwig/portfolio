// @ts-nocheck

export const getRandomIndexFor = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const OPERATIONS = {
  SCHOOLING: "SCHOOLING",
  CAREER: "CAREER",
  PERSONAL: "PERSONAL",
  PROJECTS: "PROJECTS",
  TRIVIA: "TRIVIA",
  SKILLS: "SKILLS",
  CONTACT: "CONTACT",
  TECHNOLOGIES: "TECHNOLOGIES",
  LANGUAGES: "LANGUAGES",
  NOOP: "NOOP",
  GREETING: "GREETING",
};

const projects = (lang: string) => [
  {
    id: "aiden",
    media: "github",
    url: "https://github.com/ThalesLudwig/aiden",
    name: "AIDEN",
    description: lang === "pt-BR" ? "Um chat bot, e um trabalho em progresso" : "A chat bot, and a work in progress",
  },
  {
    id: "moneyger",
    media: "playstore",
    url: "https://play.google.com/store/apps/details?id=com.valentini.ludwig.thales",
    name: "Moneyger",
    description:
      lang === "pt-BR" ? "Um app de controle financeiro com React Native" : "A financial control app with React Native",
  },
  {
    id: "moneyger-rn",
    media: "github",
    url: "https://github.com/ThalesLudwig/moneyger-rn",
    name: "Moneyger (Code)",
    description: lang === "pt-BR" ? "O código do app Moneyger" : "The code for the Moneyger app",
  },
  {
    id: "condofy-web-react",
    media: "github",
    url: "https://github.com/ThalesLudwig/condofy-web-react",
    name: "Condofy (Code)",
    description: lang === "pt-BR" ? "O código do app Condofy" : "The code for the Condofy app",
  },
  {
    id: "condofy",
    url: "https://condofy.vercel.app/",
    name: "Condofy (Demo)",
    description:
      lang === "pt-BR"
        ? "App para gestão de condomínios, em andamento"
        : "App for apartments management. Work in progress.",
  },
  {
    id: "Journaly",
    media: "playstore",
    url: "https://play.google.com/store/apps/details?id=com.valentini.journaly",
    name: "Journaly",
    description: lang === "pt-BR" ? "Um app de registro diário" : "A journal app with React Native",
  },
  {
    id: "journaly-rn",
    media: "github",
    url: "https://github.com/ThalesLudwig/journaly-rn",
    name: "Journaly (Code)",
    description: lang === "pt-BR" ? "O código do app Journaly" : "The code for the Journaly app",
  },
];

const social = (lang: string) => [
  {
    id: "social-github",
    media: "github",
    url: "https://github.com/ThalesLudwig/",
    name: "Github",
    description:
      lang === "pt-BR"
        ? "Todos os meus projetos estão aqui, você realmente deveria dar uma olhada"
        : "All my projects are here, you should totally check it out",
  },
  {
    id: "social-twitter",
    media: "twitter",
    url: "https://twitter.com/ThalesLudwig/",
    name: "Twitter",
    description:
      lang === "pt-BR" ? "Meu perfil do Twitter. Não espere muita coisa" : "My Twitter profile. Don't expect too much",
  },
  {
    id: "social-linkedin",
    media: "linkedin",
    url: "https://www.linkedin.com/in/thalesludwig/",
    name: "Linkedin",
    description:
      lang === "pt-BR"
        ? "Meu currículo online, com toda a informação que você precisa"
        : "My online resume, with all information you'll need",
  },
];

export const Recruiter = ({ expression, lang }: Operation) => {
  const grammar = EXPRESSIONS[lang];

  let response = {
    data: [],
    meta: [],
  };

  switch (grammar[expression]) {
    case OPERATIONS.TRIVIA:
      const triviaRes = RESPONSES[lang][grammar[expression]];
      response.data = [getRandomIndexFor(triviaRes)];
      break;
    case OPERATIONS.PROJECTS:
      response.data = RESPONSES[lang][grammar[expression]];
      response.meta = projects(lang);
      break;
    case OPERATIONS.CONTACT:
      response.data = RESPONSES[lang][grammar[expression]];
      response.meta = social(lang);
      break;
    default:
      response.data = RESPONSES[lang][grammar[expression]];
      break;
  }
  return response;
};

export const enUSExpressions = [
  "education",
  "school",
  "career",
  "job",
  "history",
  "experience",
  "personal",
  "company",
  "companies",
  "work",
  "project",
  "github",
  "repositories",
  "repository",
  "trivia",
  "about you",
  "skill",
  "contact",
  "technologies",
  "technology",
  "language",
  "english",
  "who are you",
  "fun fact",
  "study",
  "formation",
  "university",
  "hi",
  "hello",
  "hey",
];

export const ptBRExpressions = [
  "educacao",
  "escolaridade",
  "carreira",
  "emprego",
  "trabalho",
  "historico",
  "experiencia",
  "empresa",
  "pessoal",
  "projeto",
  "github",
  "repositorio",
  "curiosidade",
  "sobre voce",
  "habilidade",
  "skill",
  "contato",
  "tecnologia",
  "idioma",
  "ingles",
  "quem e voce",
  "estud",
  "formacao",
  "universidade",
  "linguagens",
  "oi",
  "ola",
];

const EXPRESSIONS = {
  "pt-BR": {
    [ptBRExpressions[0]]: OPERATIONS.SCHOOLING,
    [ptBRExpressions[1]]: OPERATIONS.SCHOOLING,
    [ptBRExpressions[2]]: OPERATIONS.CAREER,
    [ptBRExpressions[3]]: OPERATIONS.CAREER,
    [ptBRExpressions[4]]: OPERATIONS.CAREER,
    [ptBRExpressions[5]]: OPERATIONS.CAREER,
    [ptBRExpressions[6]]: OPERATIONS.CAREER,
    [ptBRExpressions[7]]: OPERATIONS.CAREER,
    [ptBRExpressions[8]]: OPERATIONS.PERSONAL,
    [ptBRExpressions[9]]: OPERATIONS.PROJECTS,
    [ptBRExpressions[10]]: OPERATIONS.PROJECTS,
    [ptBRExpressions[11]]: OPERATIONS.PROJECTS,
    [ptBRExpressions[12]]: OPERATIONS.TRIVIA,
    [ptBRExpressions[13]]: OPERATIONS.PERSONAL,
    [ptBRExpressions[14]]: OPERATIONS.SKILLS,
    [ptBRExpressions[15]]: OPERATIONS.SKILLS,
    [ptBRExpressions[16]]: OPERATIONS.CONTACT,
    [ptBRExpressions[17]]: OPERATIONS.TECHNOLOGIES,
    [ptBRExpressions[18]]: OPERATIONS.LANGUAGES,
    [ptBRExpressions[19]]: OPERATIONS.LANGUAGES,
    [ptBRExpressions[20]]: OPERATIONS.PERSONAL,
    [ptBRExpressions[21]]: OPERATIONS.SCHOOLING,
    [ptBRExpressions[22]]: OPERATIONS.SCHOOLING,
    [ptBRExpressions[23]]: OPERATIONS.SCHOOLING,
    [ptBRExpressions[24]]: OPERATIONS.TECHNOLOGIES,
    [ptBRExpressions[25]]: OPERATIONS.GREETING,
    [ptBRExpressions[26]]: OPERATIONS.GREETING,
  },
  "en-US": {
    [enUSExpressions[0]]: OPERATIONS.SCHOOLING,
    [enUSExpressions[1]]: OPERATIONS.SCHOOLING,
    [enUSExpressions[2]]: OPERATIONS.CAREER,
    [enUSExpressions[3]]: OPERATIONS.CAREER,
    [enUSExpressions[4]]: OPERATIONS.CAREER,
    [enUSExpressions[5]]: OPERATIONS.CAREER,
    [enUSExpressions[6]]: OPERATIONS.PERSONAL,
    [enUSExpressions[7]]: OPERATIONS.CAREER,
    [enUSExpressions[8]]: OPERATIONS.CAREER,
    [enUSExpressions[9]]: OPERATIONS.CAREER,
    [enUSExpressions[10]]: OPERATIONS.PROJECTS,
    [enUSExpressions[11]]: OPERATIONS.PROJECTS,
    [enUSExpressions[12]]: OPERATIONS.PROJECTS,
    [enUSExpressions[13]]: OPERATIONS.PROJECTS,
    [enUSExpressions[14]]: OPERATIONS.TRIVIA,
    [enUSExpressions[15]]: OPERATIONS.PERSONAL,
    [enUSExpressions[16]]: OPERATIONS.SKILLS,
    [enUSExpressions[17]]: OPERATIONS.CONTACT,
    [enUSExpressions[18]]: OPERATIONS.TECHNOLOGIES,
    [enUSExpressions[19]]: OPERATIONS.TECHNOLOGIES,
    [enUSExpressions[20]]: OPERATIONS.LANGUAGES,
    [enUSExpressions[21]]: OPERATIONS.LANGUAGES,
    [enUSExpressions[22]]: OPERATIONS.PERSONAL,
    [enUSExpressions[23]]: OPERATIONS.TRIVIA,
    [enUSExpressions[24]]: OPERATIONS.SCHOOLING,
    [enUSExpressions[25]]: OPERATIONS.SCHOOLING,
    [enUSExpressions[26]]: OPERATIONS.SCHOOLING,
    [enUSExpressions[27]]: OPERATIONS.GREETING,
    [enUSExpressions[28]]: OPERATIONS.GREETING,
    [enUSExpressions[29]]: OPERATIONS.GREETING,
  },
};

const PT_BR = {
  SCHOOLING: [
    "Sou formado no ensino superior em Análise e Desenvolvimento de Sistemas, pela Faculdade QI",
    "Também sou formado em duas especializações pela UniRitter:",
    "Desenvolvimento de Aplicações Móveis e Experiência de Usuário",
  ],
  CAREER: [
    "Comecei minha carreira trabalhando com Java na Dell, em 2015, como estagiário",
    "Em 2016 comecei a trabalhar como dev Full-stack júnior na Getnet, com Java e PHP",
    "Em 2017 fui contratado pela Datum como desenvolvedor Full-stack Pleno, dessa vez abandonando o Java e trabalhando com PHP e Angular",
    "Ainda na Datum, em 2018, tive minha primeira experiência como líder técnico!",
    "Ao final de 2018 deixei a Datum e o Brasil ao ser contratado como Engenheiro Sênior pela Aptvision, em Dublin, Irlanda",
    "Em 2019, de volta ao Brasil, continuo atuando como Engenheiro Full-Stack Sênior na Sensedia, no Projeto Albatroz",
    "Ao final de 2019 abandonei os escritórios e comecei minha carreira como Engenheiro na X-Team, de forma totalmente remota!",
  ],
  PROJECTS: [
    "Todos os meus projetos estão abertos no Github, inclusive esta página e o bot com quem você está conversando!",
    "Também tenho dois apps publicados na Play Store",
  ],
  TRIVIA: [
    "Minha comida favorita costumava ser sushi, mas desde que viajei para Roma eu me apaixonei por Pizza!",
    "Tenho uma gata que só chamo de 'Filha'!",
    "Tenho uma linda cachorrinha Shih-tzu!",
    "Sou casado com uma programadora também!",
    "Eu costumava programar em PHP no passado, mas me apaixonei por Javascript. <3",
    "Eu gosto de café, mas amo energéticos",
    "Apesar de trabalhar mais focado na web, sou apaixonado por todo tipo de dispositivo móvel!",
    "Amo jogar videogames, em especial Playstation e Nintendo",
    "Esta página foi toda construída em React com NextJS! E você pode ver o código no meu Github, está tudo lá",
    "Quem está provendo essas respostas é uma biblioteca chamada Chat-module, também criado por mim! O código é open source e está no meu Github. Vai lá ver!",
  ],
  PERSONAL: [
    "Meu nome é Thales Ludwig Valentini, mas essa parte você já sabe!",
    "Nasci e cresci na cidade de Porto Alegre, RS - Brasil, em 1991, onde morava com meu irmão mais velho e meus pais",
    "Me interessei por programação desde cedo, alterando pequenos scripts de jogos MUGEN no PC antigo do meu pai",
    "Adoro viajar e explorar, e por isso costumo optar pelo estilo de trabalho remoto",
    "Hoje vivo com a minha esposa, uma gatinha e uma cachorrinha",
  ],
  SKILLS: [
    "Javascript, Typescript, React, React Native, Redux, Angular, Vue, Node, HTML, CSS3, SCSS.",
    "A lista é longa. Basicamente qualquer coisa baseada em JS.",
  ],
  CONTACT: ["Pode entrar em contato comigo através das minhas redes sociais ou e-mail:", "thales.ludwig@gmail.com"],
  TECHNOLOGIES: [
    "Eu trabalho com qualquer coisa em Javascript!",
    "Meu foco atual é em React, React Native, e Node, mas também trabalho com Angular e Vue.",
  ],
  LANGUAGES: ["Falo inglês e português", "Inglês oral e escrito."],
  GREETING: ["Oi!", "Tudo bem?"],
};

const EN_US = {
  SCHOOLING: [
    "I am graduated in 'Systems Analysis and Development', at QI University in Brazil",
    "I also have two specializations at UniRitter University:",
    "Mobile App Development and User Experience",
  ],
  CAREER: [
    "I started my career working with Java at Dell in 2015, as an intern",
    "In 2016 I started working as a junior Full-stack developer at Getnet, with Java and PHP",
    "In 2017 I was hired by Datum as a Full-stack Developer, this time abandoning Java and working with PHP and Angular",
    "Still at Datum, in 2018, I had my first experience as a tech leader!",
    "At the end of 2018 I left Datum and Brazil when I was hired as a Senior Engineer by Aptvision, in Dublin, Ireland",
    "In 2019, back in Brazil, I continued to work as a Senior Full-Stack Engineer at Sensedia, working on the Albatroz Project",
    "At the end of 2019 I left the offices and started my career as an Engineer at X-Team, remotely!",
  ],
  PROJECTS: [
    "All of my projects are open on Github, including this page and the bot you're talking to!",
    "I also have two apps published on the Play Store",
  ],
  TRIVIA: [
    "My favorite food used to be sushi, but since I traveled to Rome I fell in love with Pizza!",
    "I have a cat that I only call 'Daughter'!",
    "I have a beautyful Shih-tzu puppy!",
    "I'm married to a programmer too!",
    "I used to program in PHP in the past, but I fell in love with Javascript. <3",
    "I like coffee, but I love energy drinks",
    "Despite working more focused on the web, I am passionate about all kinds of mobile devices!",
    "I love playing video games, especially Playstation and Nintendo",
    "This page is all built with React and NextJS! And you can see the code on my Github, it's all there",
    "The answers you see here are provided by library called Chat-moduler, also created by me! The code is open source and is available on my Github. Go check it out!",
  ],
  PERSONAL: [
    "My name is Thales Ludwig Valentini, but you already know that part!",
    "I was born and raised in the city of Porto Alegre, RS - Brazil, in 1991, where I lived with my older brother and my parents",
    "I was interested in programming from an early age, changing small MUGEN game scripts on my father's old PC",
    "I love to travel and explore, so I usually opt for the remote work style",
    "Today I live with my wife, a kitten and a puppy",
  ],
  SKILLS: [
    "Javascript, Typescript, React, React Native, Redux, Angular, Vue, Node, HTML, CSS3, SCSS.",
    "The list is big. Basically anything JS-based.",
  ],
  CONTACT: ["You can contact me through my social networks or by e-mail", "thales.ludwig@gmail.com"],
  TECHNOLOGIES: [
    "I work with anything in JavaScript!",
    "My current focus is on React, React Native, and Node, but I also work with Angular and Vue.",
  ],
  LANGUAGES: ["I speak English and Portuguese", "Oral and written English."],
  GREETING: ["Hey!", "How are you?"],
};

const RESPONSES = {
  "pt-BR": PT_BR,
  "en-US": EN_US,
};
