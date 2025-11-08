import { connectToDatabase } from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function DELETE() {
  try {
    const db = await connectToDatabase()
    const messagesCollection = db.collection("messages")

    const result = await messagesCollection.deleteMany({})

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
      message: `Deleted ${result.deletedCount} messages`,
    })
  } catch (error) {
    console.error("Error clearing messages:", error)
    return NextResponse.json({ error: "Failed to clear messages" }, { status: 500 })
  }
}
