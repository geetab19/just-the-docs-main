import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
//const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
const branch = "master";

export default defineConfig({
  branch,
  clientId: "1779454f-0fea-4f90-9578-6e5b6751dea4", // Get this from tina.io
  token: "1989eb6eb0d8f487396092872d2a30fe59ff8479", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "just-the-docs-main/",
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
