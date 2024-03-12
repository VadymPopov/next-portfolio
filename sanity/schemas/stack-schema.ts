const stack = {
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "icon",
      title: "icon",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default stack;
