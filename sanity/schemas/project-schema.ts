const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "github_url",
      title: "GITHUB URL",
      type: "url",
    },
    { name: "stack", title: "Stack", type: "string" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
      ],
    },
  ],
};

export default project;
