import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Olá, me chamo Lucas, tenho 25 anos, e sou apaixonado por tecnologia.
Minha paixão pelo universo digital me levou a escolher uma carreira na área de programação, estou sempre em constante busca por conhecimento.
Com determinação, eu trilho meu caminho em direção a uma carreira promissora na programação, onde minha dedicação promete resultados.`;

export const ABOUT_TEXT = `Sou estudante de programação, atualemte faço faculdade de Análise e Desenvolvimento de Sistemas (ADS), com conhecimento proveitoso em front-end. 
Dediquei meus estudos a aprender ferramentas como React, Node.js, TailwindCSS, MySQL, Html, Css, JavaScript e JAVA. 
Minha jornada no desenvolvimento web começou com uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma jornada onde me esforço continuamente para 
aprender e me adaptar a novos desafios.`;



export const PROJECTS = [
  {
    title: "Site E-Commerce - Compre Bem",
    image: project1,
    description:
      "Um site de comércio eletrônico totalmente funcional com recursos como lista de produtos, carrinho de compras e autenticação de usuário.",
    technologies: ["HTML", "CSS", "JavaScript", "Java"],
    botao1: ["VER PROJETO NO GITHUB"],
  },
  {
    title: "Projeto Cardápio Online - Hamburgueria",
    image: project2,
    description:
      "Um site de cardápio online totalmente funcional com recursos como escolher produto, adicionar ao carrinho, autenticação de horário de funcionamento do estabelecimento e realização do pedido integrado com o whatsapp.",
    technologies: ["HTML", "CSS", "TAILWINDCSS", "JAVASCRIPT"],
    botao2: ["VER PROJETO NO GITHUB"],
    website: ["VER PROJETO ONLINE"]
  },
  {
    title: "Projeto Em breve",
    image: project3,
    description:
      "Projeto Em breve.",
    technologies: ["Em breve"],
    botao3: ["Ver projeto no github"],
  },
  {
    title: "Projeto Em breve",
    image: project4,
    description:
      "Projeto Em breve.",
    technologies: ["Em breve"],
    botao4: ["Link do Repositório"],
  },
];

export const CONTACT = {
  address: "Nova Iguaçu - RJ",
  phoneNo: "+55 (21) 99424-3987 ",
  email: "avila.estudohtml@gmail.com",
};
