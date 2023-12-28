import { Client, Account, ID, Databases } from "appwrite";

export const config = {
    projectId: process.env.APPWRITE_PROJECT_ID,
    endpoint: 'https://cloud.appwrite.io/v1',
    databaseId: process.env.APPWRITE_DATABASE_ID,
    templateCollectionId: process.env.APPWRITE_TEMPLATES_COLLECTION_ID,
    ebooksCollectionId: process.env.APPWRITE_EBOOKS_COLLECTION_ID,
    iconsCollectionId: process.env.APPWRITE_ICONS_COLLECTION_ID,
}

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setKey(config.apiKey)

export const account = new Account(client);
export const database = new Databases(client);

export const getTemplates = async () => {
    return await database.listDocuments(config.databaseId, config.templateCollectionId);
};

export const geteBooks = async () => {
    return await database.listDocuments(config.databaseId, config.ebooksCollectionId);
};

export const getIcons = async () => {
    return await database.listDocuments(config.databaseId, config.iconsCollectionId);
};
