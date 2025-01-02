import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectsId,
});

function ProjectsId() {
  return <div>Hello "/projects"!</div>;
}
