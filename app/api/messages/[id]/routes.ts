import { connectToDatabase } from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { type NextRequest, NextResponse } from "next/server"

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { read } = await req.json()

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid message ID" }, { status: 400 })
    }

    const db = await connectToDatabase()
    const messagesCollection = db.collection("messages")

    const result = await messagesCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { read } },
      { returnDocument: "after" },
    )

    if (!result || !result.value) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return NextResponse.json(result.value)
  } catch (error) {
    console.error("Error updating message:", error)
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid message ID" }, { status: 400 })
    }

    const db = await connectToDatabase()
    const messagesCollection = db.collection("messages")

    const result = await messagesCollection.deleteOne({
      _id: new ObjectId(id),
    })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Message deleted" })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}
