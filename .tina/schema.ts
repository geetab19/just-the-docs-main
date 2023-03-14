import { defineSchema } from "tinacms";

export default defineSchema({
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        templates: [
          {
            label: "Article",
            name: "article",
            fields: [
              {
                type: "text",
                label: "Title",
                name: "title",
              },
              {
                type: "reference",
                label: "Author",
                name: "author",
                collection: "authors",
              },
            ],
          },
        ],
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        templates: [
          {
            label: "Author",
            name: "basicAuthor",
            fields: [
              {
                type: "text",
                label: "Name",
                name: "name",
              },
              {
                type: "text",
                label: "Avatar",
                name: "avatar",
              },
            ],
          },
        ],
      },
    ],
  });