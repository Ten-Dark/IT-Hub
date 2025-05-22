import { db, storage } from '@/shared/config/appwrite';
import { ID, Models, Query } from 'appwrite';
import { AppwriteDocument, PostDocument } from '@/entities/Post/model/types.ts';

function getEnv() {
  const DB_ID = import.meta.env.VITE_APP_DB_ID;
  const COLL_ID = import.meta.env.VITE_APP_COLLECTION_ID;
  if (!DB_ID || !COLL_ID) {
    throw new Error('Missing VITE_APP_DB_ID or VITE_APP_COLLECTION_ID');
  }
  return { DB_ID, COLL_ID };
}

async function uploadImg(file: File): Promise<string> {
  const BUCKET_ID = import.meta.env.VITE_APP_BUCKET_ID;
  const result: Models.File = await storage.createFile(
    BUCKET_ID,
    ID.unique(),
    file,
  );
  return storage.getFileView(BUCKET_ID, result.$id);
}

function createMethods<T extends AppwriteDocument>() {
  const { DB_ID, COLL_ID } = getEnv();

  return {
    async create(
      payload: Omit<T, keyof AppwriteDocument>,
      file?: File,
    ): Promise<Models.Document> {
      let imageUrl = '';
      if (file) {
        imageUrl = await uploadImg(file);
      }
      return db.createDocument<T>(DB_ID, COLL_ID, ID.unique(), {
        ...payload,
        image: imageUrl,
      });
    },

    async update(
      documentId: string,
      payload: Partial<T>,
    ): Promise<Models.Document> {
      return db.updateDocument<T>(DB_ID, COLL_ID, documentId, payload);
    },

    async delete(
      documentId: string,
    ): Promise<{ success: boolean; id: string }> {
      await db.deleteDocument(DB_ID, COLL_ID, documentId);
      return { success: true, id: documentId };
    },

    async getById(documentId: string): Promise<Models.Document> {
      return db.getDocument<T>(DB_ID, COLL_ID, documentId);
    },

    async getAll(queries: string[] = []): Promise<Models.DocumentList<T>> {
      return db.listDocuments<T>(DB_ID, COLL_ID, queries);
    },

    async getPaginated(
      limit: number,
      offset: number,
      extraQueries: string[] = [],
    ): Promise<Models.DocumentList<T>> {
      return db.listDocuments<T>(DB_ID, COLL_ID, [
        ...extraQueries,
        Query.limit(limit),
        Query.offset(offset),
      ]);
    },

    async getByCategory(category: string) {
      return this.getAll([Query.equal('category', category)]);
    },

    async search(title: string) {
      return this.getAll([Query.search('title', title)]);
    },
  };
}

export const PostMethods = createMethods<PostDocument>();
