export const TopBars = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

interface Skill {
  title: string;
  iconSrc: string;
}

export const skillsData: Skill[] = [
  { title: "React", iconSrc: "/assets/react.png" },
  { title: "Next.js", iconSrc: "/assets/nextjs.svg" },
  { title: "TypeScript", iconSrc: "/assets/typescript.png" },
  { title: "Tailwind", iconSrc: "/assets/tailwindcss.png" },
  { title: "Node.js", iconSrc: "/assets/node.png" },
  { title: "MongoDB", iconSrc: "/assets/mongodb.png" },
  { title: "Github", iconSrc: "/assets/github.png" },
  { title: "Solidity", iconSrc: "/assets/solidity.png" },
];
export const achievements = [
  "Completed a development of fullstack Q & A based platform from JS Mastery using NextJS",
  "Completed DeFi Course from University of Nicosia",
  "Completed Developer for Bitcoin from Saylor Academy",
  "Contributed over more than 100 open source project at Github",
];

export const projects = [
  {
    id: "web",
    title: "UltimateOcean",
    description:
      "This projected is called 'UltimateOcean' and it has interesting features where users can chat with AI, get response and help, post questions in the forum, provide answer and also get answer from AI. The users can also post the status, provide comment, share and vote. Interestingly, there is a detailed document on technical steps on how to deploy smart contract using Solidity and detailed history of factors that led to the rise of Bitcoin has been mentioned. Don't miss it.",
    image: "/assets/projects/project1.png",
    tags: ["NextJS", "Node.js", "MongoDB", "Clerk"],
    link: "#",
  },
  {
    id: "web",
    title: "Banking Application",
    description:
      "Banking build and deploy a banking app with a finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users on the platform using Next.js 14",
    image: "/assets/projects/project2.png",
    tags: ["Shadcn", "Typescript", "Appwrite"],
    link: "#",
  },
  {
    id: "web",
    title: "Pema Zoom",
    description:
      " This is professional enterprise-ready video conferencing app built using Next.js 14, Stream, and Tailwind CSS.",
    image: "/assets/projects/project3.png",
    tags: ["Shadcn", "Typescript", "MongoDB"],
    link: "#",
  },
  {
    id: "web",
    title: "Cloned Twitter",
    description:
      "This is a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite and TypeScript",
    image: "/assets/projects/project4.png",
    tags: ["Shadcn", "Typescript", "MongoDB"],
    link: "#",
  },
];
