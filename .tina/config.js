import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "611c6f3d-4132-4636-ab81-24482bc7713a", // Get this from tina.io
  token: "bcdb3b7397a9321b26d979c111a55cd57f10fabd", // Get this from tina.io
  build: {
    outputFolder: "just-the-docs-main/admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public",
      publicFolder: "uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
