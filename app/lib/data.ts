import ClinicManager from "../../assets/images/clinicmanager.png";
import WriteIt from "../../assets/images/writeit.png";

export type TProjectsData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

export const projectsData: TProjectsData[] = [
  {
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
