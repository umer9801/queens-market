"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, MessageSquare, Eye, EyeOff, LogOut } from "lucide-react"
import AdminSidebar from "@/components/admin/sidebar"
import MessagesList from "@/components/admin/messages-list"
import MessageDetail from "@/components/admin/message-detail"
import EmailSettings from "@/components/admin/email-settings"
import DashboardStats from "@/components/admin/dashboard-stats"

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

type TabType = "dashboard" | "messages" | "emails" | "settings"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>("dashboard")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Load messages on mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages()
    } else {
      setLoading(false)
    }
  }, [isAuthenticated])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/messages")
      if (!res.ok) throw new Error("Failed to fetch messages")
      const data = await res.json()
      setMessages(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error loading messages")
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple admin authentication - in production, use proper authentication
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "admin123") {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      setError("Invalid password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    setMessages([])
    setSelectedMessage(null)
    setActiveTab("dashboard")
  }

  const handleDeleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return
    try {
      const res = await fetch(`/api/messages/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete message")
      setMessages(messages.filter((m) => m._id !== id))
      if (selectedMessage?._id === id) setSelectedMessage(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting message")
    }
  }

  const handleClearAll = async () => {
    if (!confirm("Are you sure you want to clear ALL messages? This cannot be undone.")) return
    try {
      const res = await fetch("/api/messages/clear-all", { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to clear messages")
      setMessages([])
      setSelectedMessage(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error clearing messages")
    }
  }

  const handleMarkAsRead = async (id: string, read: boolean) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !read }),
      })
      if (!res.ok) throw new Error("Failed to update message")
      const updated = await res.json()
      setMessages(messages.map((m) => (m._id === id ? updated : m)))
      if (selectedMessage?._id === id) setSelectedMessage(updated)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating message")
    }
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-3">
                <Mail size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white text-center mb-2">Admin Dashboard</h1>
            <p className="text-slate-400 text-center mb-8">Queens Convenient Market</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Admin Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError("")
                    }}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Login
              </button>
            </form>

            <p className="text-slate-500 text-center text-xs mt-6">
              Default password: <span className="text-slate-400 font-mono">admin123</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-slate-400 mt-1">Welcome back! Manage your messages and settings.</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-900/20 hover:bg-red-900/40 border border-red-700 text-red-400 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg flex justify-between items-center">
                <span>{error}</span>
                <button onClick={() => setError("")} className="text-red-400 hover:text-red-300">
                  ×
                </button>
              </div>
            )}

            {/* Tab Content */}
            {activeTab === "dashboard" && <DashboardStats messages={messages} />}

            {activeTab === "messages" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <MessagesList
                    messages={messages}
                    selectedMessage={selectedMessage}
                    onSelectMessage={setSelectedMessage}
                    onDeleteMessage={handleDeleteMessage}
                    onClearAll={handleClearAll}
                    loading={loading}
                  />
                </div>
                <div className="lg:col-span-2">
                  {selectedMessage ? (
                    <MessageDetail
                      message={selectedMessage}
                      onMarkAsRead={handleMarkAsRead}
                      onDelete={() => {
                        handleDeleteMessage(selectedMessage._id)
                      }}
                    />
                  ) : (
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-12 flex flex-col items-center justify-center h-full">
                      <MessageSquare size={48} className="text-slate-600 mb-4" />
                      <p className="text-slate-400">Select a message to view details</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "emails" && <EmailSettings />}

            {activeTab === "settings" && (
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                <div className="space-y-4">
                  <p className="text-slate-400">Additional settings coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
