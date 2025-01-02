import ClinicManager from "../../assets/images/clinicmanager.png";
import WriteIt from "../../assets/images/writeit.png";
import CSSImage from "../../assets/images/css.png";
import JavaScriptImage from "../../assets/images/javascript-logo.png";
import TypeScriptImage from "../../assets/images/typescript.png";
import ReactImage from "../../assets/images/react.png";
import NextjsImage from "../../assets/images/nextjs.png";
import Nodejs from "../../assets/images/nodejs.png";
import Git from "../../assets/images/github.png";
import Tailwind from "../../assets/images/tailwind.png";
import PrismaImage from "../../assets/images/prisma.png";
import Redux from "../../assets/images/redux.png";
import Express from "../../assets/images/express.png";
import Postgres from "../../assets/images/postgresql.png";
import PythonImage from "../../assets/images/python.png";
import FramerMotion from "../../assets/images/framer.png";
import MongoDB from "../../assets/images/mongodb.png";
import HTMLImage from "../../assets/images/html.png";

export type TProjectsData = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

export const projectsData: TProjectsData[] = [
  {
    id: 1,
    title: "Clinic manager",
    description: "All in one Solution For clinic management",
    tags: [
      "React",
      "Next.js",
      "PostgresSQL",
      "Tailwind",
      "Prisma",
      "Typescript",
    ],
    imageUrl: ClinicManager,
    githubUrl: "https://github.com/salmansheri/clinic_manager",
    liveUrl: "https://clinic-manager-nu.vercel.app",
  },
  {
    id: 2,
    title: "WriteIt",
    description: "A Website Helpful for Managing Journals",
    tags: [
      "React",
      "TypeScript",
      "Drizzle",
      "Next.js",
      "Tailwind",
      "Clerk Authentication",
    ],
    imageUrl: WriteIt,
    githubUrl: "https://github.com/salmansheri/Journal-app-by-salman",
    liveUrl: "https://write-it-by-salman.vercel.app",
  },
];

export const skillsData = [
  {
    label: "HTML",
    src: HTMLImage,
  },
  {
    label: "CSS",
    src: CSSImage,
  },
  {
    label: "JavaScript",
    src: JavaScriptImage,
  },
  {
    label: "TypeScript",
    src: TypeScriptImage,
  },
  {
    label: "React",
    src: ReactImage,
  },
  {
    label: "Next.js",
    src: NextjsImage,
  },
  {
    label: "Node.js",
    src: Nodejs,
  },
  {
    label: "Git",
    src: Git,
  },
  {
    label: "Tailwind",
    src: Tailwind,
  },
  {
    label: "Prisma",
    src: PrismaImage,
  },
  {
    label: "Redux",
    src: Redux,
  },
  {
    label: "Express",
    src: Express,
  },
  {
    label: "PostgreSQL",
    src: Postgres,
  },
  {
    label: "Python",
    src: PythonImage,
  },
  {
    label: "Framer Motion",
    src: FramerMotion,
  },
  {
    label: "MongoDB",
    src: MongoDB,
  },
] as const;
