import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
<<<<<<< HEAD
  clientId: "c705a7fe-8e9e-4f96-a275-c275d002c178", // Get this from tina.io
  token: "98193fb19321d51f1a1e8af60866b570fbd58f5d", // Get this from tina.io
=======
  clientId: "df8f0f35-dc4b-426b-ae0d-9241538e77c5", // Get this from tina.io
  token: "3c507850d27e957657f3f317999385f6570b15a4", // Get this from tina.io
>>>>>>> 258f983debe35517ae99fbefb9cb66aab9bd4e04
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
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
