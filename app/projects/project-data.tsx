export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Woodshed AI",
    year: 2023,
    description:
      "Learning In Public",
    url: "https://github.com/mpazaryna/woodshed-ai",
  },
  {
    title: "Yoga Teaching",
    year: 2022,
    description:
      "My Yoga teaching site.",
    url: "https://yoga.paz.land/",
  },
];
