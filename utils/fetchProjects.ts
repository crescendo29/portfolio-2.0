import { Project } from "../typings"

export const fetchProjects = async() => {
  const res = await fetch(`${process.env.NEXT_SANITY_BASE_URL}/api/getProject`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects
}