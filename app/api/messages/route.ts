import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = await connectToDatabase()
    const messagesCollection = db.collection("messages")

    // Create new message
    const newMessage = {
      name,
      email,
      phone,
      subject,
      message,
      read: false,
      createdAt: new Date(),
    }

    const result = await messagesCollection.insertOne(newMessage)

    // TODO: Send email notification to admin if configured
    // const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
    // if (adminEmail) {
    //   await sendEmailNotification(adminEmail, newMessage)
    // }

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: "Message received successfully",
    })
  } catch (error) {
    console.error("Error saving message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase()
    const messagesCollection = db.collection("messages")

    // Fetch all messages, sorted by newest first
    const messages = await messagesCollection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
