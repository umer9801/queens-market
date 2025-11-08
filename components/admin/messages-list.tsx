"use client"

import { Trash2, Mail, Loader2 } from "lucide-react"

type Message = {
  _id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
  read: boolean
}

interface MessagesListProps {
  messages: Message[]
  selectedMessage: Message | null
  onSelectMessage: (message: Message) => void
  onDeleteMessage: (id: string) => void
  onClearAll: () => void
  loading: boolean
}

export default function MessagesList({
  messages,
  selectedMessage,
  onSelectMessage,
  onDeleteMessage,
  onClearAll,
  loading,
}: MessagesListProps) {
  const unreadCount = messages.filter((m) => !m.read).length

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col items-center justify-center h-screen">
        <Loader2 size={40} className="text-yellow-500 animate-spin" />
        <p className="text-slate-400 mt-4">Loading messages...</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden flex flex-col h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Messages</h2>
          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            {messages.length} total
          </span>
        </div>
        {unreadCount > 0 && (
          <div className="text-sm text-yellow-400 font-medium">
            {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Mail size={40} className="text-slate-600 mb-3" />
            <p className="text-slate-400">No messages yet</p>
          </div>
        ) : (
          <div className="space-y-2 p-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                onClick={() => onSelectMessage(msg)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedMessage?._id === msg._id
                    ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50"
                    : "bg-slate-700/50 border border-slate-600 hover:bg-slate-700"
                } ${!msg.read ? "border-l-4 border-l-yellow-500" : ""}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className={`font-semibold ${!msg.read ? "text-yellow-400" : "text-slate-200"}`}>{msg.name}</p>
                    <p className="text-xs text-slate-400">{msg.email}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      msg.subject === "general"
                        ? "bg-blue-500/20 text-blue-400"
                        : msg.subject === "products"
                          ? "bg-green-500/20 text-green-400"
                          : msg.subject === "feedback"
                            ? "bg-purple-500/20 text-purple-400"
                            : msg.subject === "partnership"
                              ? "bg-pink-500/20 text-pink-400"
                              : "bg-slate-500/20 text-slate-400"
                    }`}
                  >
                    {msg.subject}
                  </span>
                </div>
                <p className="text-sm text-slate-400 line-clamp-2 mb-3">{msg.message}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteMessage(msg._id)
                    }}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {messages.length > 0 && (
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={onClearAll}
            className="w-full bg-red-900/30 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Clear All Messages
          </button>
        </div>
      )}
    </div>
  )
}
