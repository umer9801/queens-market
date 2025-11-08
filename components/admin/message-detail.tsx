"use client"

import { Mail, Phone, Calendar, Copy, Trash2, Eye, EyeOff } from "lucide-react"

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

interface MessageDetailProps {
  message: Message
  onMarkAsRead: (id: string, read: boolean) => void
  onDelete: () => void
}

export default function MessageDetail({ message, onMarkAsRead, onDelete }: MessageDetailProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const subjectColors: Record<string, string> = {
    general: "from-blue-500 to-blue-600",
    products: "from-green-500 to-green-600",
    feedback: "from-purple-500 to-purple-600",
    partnership: "from-pink-500 to-pink-600",
    other: "from-slate-500 to-slate-600",
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden h-[calc(100vh-140px)] flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-r ${subjectColors[message.subject] || subjectColors.other} p-6 text-white`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{message.name}</h2>
            <p className="text-white/80 mt-1 capitalize">{message.subject}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onMarkAsRead(message._id, message.read)}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title={message.read ? "Mark as unread" : "Mark as read"}
            >
              {message.read ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <button onClick={onDelete} className="bg-red-900/40 hover:bg-red-900/60 p-2 rounded-lg transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Contact Information</h3>

          <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
            <Mail size={18} className="text-yellow-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-white break-all">{message.email}</p>
            </div>
            <button onClick={() => copyToClipboard(message.email)} className="text-slate-400 hover:text-slate-200 p-2">
              <Copy size={16} />
            </button>
          </div>

          {message.phone && (
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
              <Phone size={18} className="text-yellow-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-400">Phone</p>
                <p className="text-white">{message.phone}</p>
              </div>
              <button
                onClick={() => copyToClipboard(message.phone)}
                className="text-slate-400 hover:text-slate-200 p-2"
              >
                <Copy size={16} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
            <Calendar size={18} className="text-yellow-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Received</p>
              <p className="text-white">{new Date(message.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Message</h3>
          <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
            <p className="text-white whitespace-pre-wrap leading-relaxed">{message.message}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 p-6 bg-slate-700/50 flex gap-3">
        <button
          onClick={() => copyToClipboard(message.email)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Copy Email
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-900/50 hover:bg-red-900/70 text-red-400 font-semibold py-2 rounded-lg transition-colors"
        >
          Delete Message
        </button>
      </div>
    </div>
  )
}
