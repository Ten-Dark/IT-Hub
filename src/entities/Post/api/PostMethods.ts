import { db } from '@/shared/config/appwrite';
import { ID, Query } from 'appwrite';
import { AppwriteDocument, PostDocument } from '@/entities/Post/model/types.ts';

const getEnv = () => {
  const DB_ID = import.meta.env.VITE_APP_DB_ID;
  const COLL_ID = import.meta.env.VITE_APP_COLLECTION_ID;
  if (!DB_ID || !COLL_ID) {
    throw new Error(`Missing VITE_APP_DB_ID or VITE_APP_COLLECTION_ID`);
  }
  return { DB_ID, COLL_ID };
};

const createCollectionMethods = <T extends AppwriteDocument>() => {
  const methods = {
    create: async (payload: Omit<T, keyof AppwriteDocument>, id?: string) => {
      const { DB_ID, COLL_ID } = getEnv();
      const documentId = id || ID.unique();
      return db.createDocument<T>(DB_ID, COLL_ID, documentId, payload);
    },

    update: async (documentId: string, payload: Partial<T>) => {
      const { DB_ID, COLL_ID } = getEnv();
      return db.updateDocument<T>(DB_ID, COLL_ID, documentId, payload);
    },

    delete: async (documentId: string) => {
      const { DB_ID, COLL_ID } = getEnv();
      await db.deleteDocument(DB_ID, COLL_ID, documentId);
      return { success: true, id: documentId };
    },

    getById: async (documentId: string) => {
      const { DB_ID, COLL_ID } = getEnv();
      return db.getDocument<T>(DB_ID, COLL_ID, documentId);
    },

    getAll: async (queries: string[] = []) => {
      const { DB_ID, COLL_ID } = getEnv();
      return db.listDocuments<T>(DB_ID, COLL_ID, queries);
    },

    getPaginated: async (
      limit: number,
      offset: number,
      additionalQueries?: string[],
    ) => {
      return methods.getAll([
        ...(additionalQueries || []),
        Query.limit(limit),
        Query.offset(offset),
      ]);
    },
  };

  return methods;
};

export const collections = {
  posts: {
    ...createCollectionMethods<PostDocument>(),
    getByCategory: async (category: string) => {
      return createCollectionMethods<PostDocument>().getAll([
        Query.equal('category', category),
      ]);
    },
    search: async (query: string) => {
      return createCollectionMethods<PostDocument>().getAll([
        Query.search('title', query),
      ]);
    },
  },
};
