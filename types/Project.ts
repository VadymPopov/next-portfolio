import { PortableTextBlock } from "sanity";

export type Image = {
  url: string;
  alt: string;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  github_url: string;
  stack: string;
  content: PortableTextBlock[];
  images: Image[];
};
