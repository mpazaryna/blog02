export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  blog?: string;
}

export const projects: Project[] = [
  {
    title: "Woodshed AI",
    year: 2023,
    description:
      "This is a project to help with alignment in software development.",
    url: "https://github.com/mpazaryna/woodshed-ai",
    blog: "woodshed-ai",
  },
  {
    title: "Alignment Application",
    year: 2023,
    description:
      "A tool to help with alignment in software development.",
    url: "https://yoga.paz.land/",
    blog: "alignment",
  },
];
