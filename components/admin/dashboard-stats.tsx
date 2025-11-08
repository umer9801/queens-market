import { MessageSquare, Mail, Eye, Clock } from "lucide-react"

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

interface DashboardStatsProps {
  messages: Message[]
}

export default function DashboardStats({ messages }: DashboardStatsProps) {
  const totalMessages = messages.length
  const unreadMessages = messages.filter((m) => !m.read).length
  const readMessages = messages.filter((m) => m.read).length

  // Count by subject
  const subjectCounts = messages.reduce(
    (acc, msg) => {
      acc[msg.subject] = (acc[msg.subject] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Get latest message
  const latestMessage = messages.length > 0 ? new Date(messages[0]?.createdAt).toLocaleString() : "No messages yet"

  const stats = [
    {
      label: "Total Messages",
      value: totalMessages,
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-500/10",
    },
    {
      label: "Unread Messages",
      value: unreadMessages,
      icon: Mail,
      color: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-500/10",
    },
    {
      label: "Read Messages",
      value: readMessages,
      icon: Eye,
      color: "from-green-500 to-green-600",
      bg: "bg-green-500/10",
    },
    {
      label: "Latest Message",
      value: latestMessage,
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      bg: "bg-purple-500/10",
      fullWidth: true,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className={`bg-slate-800 rounded-xl border border-slate-700 p-6 ${
                stat.fullWidth ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                  {typeof stat.value === "number" ? (
                    <p className="text-4xl font-bold text-white mt-2">{stat.value}</p>
                  ) : (
                    <p className="text-slate-200 text-sm mt-2">{stat.value}</p>
                  )}
                </div>
                <div className={`${stat.bg} rounded-lg p-3`}>
                  <Icon className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} size={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Messages by Subject */}
      {Object.keys(subjectCounts).length > 0 && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Messages by Subject</h3>
          <div className="space-y-3">
            {Object.entries(subjectCounts).map(([subject, count]) => (
              <div key={subject} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      subject === "general"
                        ? "bg-blue-500"
                        : subject === "products"
                          ? "bg-green-500"
                          : subject === "feedback"
                            ? "bg-purple-500"
                            : subject === "partnership"
                              ? "bg-pink-500"
                              : "bg-slate-500"
                    }`}
                  />
                  <span className="text-slate-300 capitalize font-medium">{subject}</span>
                </div>
                <span className="bg-slate-600 px-3 py-1 rounded-lg text-white font-semibold text-sm">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {messages.length > 0 && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Recent Messages</h3>
          <div className="space-y-3 max-h-96 overflow-auto">
            {messages.slice(0, 5).map((msg) => (
              <div
                key={msg._id}
                className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{msg.name}</p>
                  <p className="text-slate-400 text-sm">{msg.email}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-slate-400 text-sm">{new Date(msg.createdAt).toLocaleDateString()}</p>
                  {!msg.read && <span className="text-xs text-yellow-400 font-medium">Unread</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
