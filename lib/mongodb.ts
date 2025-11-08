import { MongoClient, type Db } from "mongodb"

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<Db> {
  if (cachedClient && cachedDb) {
    return cachedDb
  }

  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables")
  }

  try {
    // Reuse client during hot reloads in development
    const clientPromise = global._mongoClientPromise ?? (global._mongoClientPromise = new MongoClient(mongoUri).connect())
    const client = await clientPromise

    const db = client.db(process.env.MONGODB_DB_NAME || "queens-market")

    cachedClient = client
    cachedDb = db

    return db
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    throw error
  }
}
