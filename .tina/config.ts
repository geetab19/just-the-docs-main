import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "f2850801-2e0a-4745-9e54-31fafdceb527", // Get this from tina.io
  token: "9bc2adf61aa3e6861f18373750579e023a89c8f8", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
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
