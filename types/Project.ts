import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  github_url: string;
  stack: string;
  content: PortableTextBlock[];
};
