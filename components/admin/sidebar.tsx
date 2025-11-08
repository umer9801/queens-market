"use client"

import { BarChart3, Mail, MessageSquare, Settings, LogOut } from "lucide-react"

type TabType = "dashboard" | "messages" | "emails" | "settings"

interface AdminSidebarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  onLogout: () => void
}

export default function AdminSidebar({ activeTab, setActiveTab, onLogout }: AdminSidebarProps) {
  const tabs = [
    { id: "dashboard" as const, label: "Dashboard", icon: BarChart3 },
    { id: "messages" as const, label: "Messages", icon: MessageSquare },
    { id: "emails" as const, label: "Email Logs", icon: Mail },
    { id: "settings" as const, label: "Settings", icon: Settings },
  ]

  return (
    <aside className="hidden md:flex w-64 bg-slate-800 border-r border-slate-700 flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Mail size={24} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white text-lg">QCM Admin</h2>
            <p className="text-xs text-slate-400">Management Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-l-2 border-yellow-500"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 px-4 py-3 rounded-lg transition-colors font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  )
}
