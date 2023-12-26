import { Client, Account, ID, Databases } from "appwrite";

const config = {
    projectId: process.env.APPWRITE_PROJECT_ID,
    endpoint: process.env.APPWRITE_ENDPOINT,
    databaseId: process.env.APPWRITE_DATABASE_ID
}

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

export const account = new Account(client);
export const database = new Databases(client);