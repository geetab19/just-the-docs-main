import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "611c6f3d-4132-4636-ab81-24482bc7713a", // Get this from tina.io
  token: "bcdb3b7397a9321b26d979c111a55cd57f10fabd", // Get this from tina.io
  build: {
    outputFolder: "just-the-docs-main/admin",
    publicFolder: "just-the-docs-main/",
  },
  media: {
    tina: {
      mediaRoot: "just-the-docs-main/uploads",
      publicFolder: "just-the-docs-main/assets",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();        
              let currentDate = `${year}-${month}-${day}`;        
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
          }
        },
        fields: [
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          { 
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          { 
            type: "string",
            name: "categories",
            label: "Categories",
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
