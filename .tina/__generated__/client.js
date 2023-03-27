import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'bcdb3b7397a9321b26d979c111a55cd57f10fabd', queries });
export default client;
  