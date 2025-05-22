import { Account, Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APP_ENDPOINT || '')
  .setProject(import.meta.env.VITE_APP_PROJECT_ID || '');

export const account = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);
export const POSTS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_POSTS_COLLECTION_ID!;
