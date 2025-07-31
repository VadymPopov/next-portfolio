const currentDate = new Date().toISOString().split("T")[0];

const config = {
  projectId: "4rxjte4v",
  dataset: "production",
  apiVersion: currentDate,
  useCdn: false,
};

export default config;
