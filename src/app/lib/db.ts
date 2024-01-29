import { MongoClient } from 'mongodb';

const DB = process.env.DATABASE_CONNECTION!
    .replace("<DATABASE_NAME>", process.env.DATABASE_NAME!)
    .replace("<DATABASE_USERNAME>", process.env.DATABASE_USERNAME!)
    .replace("<DATABASE_PASSWORD>", process.env.DATABASE_PASSWORD!);

export async function connectToDatabase() {

    try {
        const client = await new MongoClient(DB as string);
        return client.connect();
    } catch (error) {
        throw new Error(`Could not connect to database: ${error}`);
    }
}