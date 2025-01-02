import { createFileRoute } from "@tanstack/react-router";
import Header from "~/components/layout/header.tsx";
import Hero from "~/components/sections/hero.tsx";
import Intro from "~/components/sections/intro.tsx";
import Projects from "~/components/sections/projects.tsx";
import Footer from "~/components/layout/footer.tsx";
import Skills from "~/components/sections/skills.tsx";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
