"use client"

import { Mail, AlertCircle, Check } from "lucide-react"
import { useState } from "react"

export default function EmailSettings() {
  const [adminEmail, setAdminEmail] = useState(process.env.NEXT_PUBLIC_ADMIN_EMAIL || "")
  const [autoForward, setAutoForward] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Configuration Card */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="bg-blue-500/20 rounded-lg p-3">
            <Mail className="text-blue-400" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Email Configuration</h2>
            <p className="text-slate-400 mt-1">Manage email settings for contact form submissions</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Admin Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Admin Email Address</label>
            <p className="text-xs text-slate-500 mb-3">Messages will be sent to this email address</p>
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="your-email@example.com"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <p className="text-xs text-slate-500 mt-2">
              Add this email in the Vars section of the sidebar as{" "}
              <code className="bg-slate-700 px-2 py-1 rounded">NEXT_PUBLIC_ADMIN_EMAIL</code>
            </p>
          </div>

          {/* Auto Forward */}
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <div>
              <p className="text-white font-semibold">Auto-forward Messages</p>
              <p className="text-slate-400 text-sm mt-1">Forward contact submissions to admin email automatically</p>
            </div>
            <input
              type="checkbox"
              checked={autoForward}
              onChange={(e) => setAutoForward(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <div>
              <p className="text-white font-semibold">Email Notifications</p>
              <p className="text-slate-400 text-sm mt-1">Receive email alerts for new messages</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Information Box */}
          <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-700/50 rounded-lg">
            <AlertCircle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-300 font-medium">Setup Required</p>
              <p className="text-yellow-200/80 text-sm mt-1">
                To enable email notifications, add your admin email address via the Vars section in the sidebar.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <Check size={20} />
                Settings Saved!
              </>
            ) : (
              "Save Settings"
            )}
          </button>
        </div>
      </div>

      {/* MongoDB Setup Info */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
        <h3 className="text-xl font-bold text-white mb-4">Database Setup</h3>
        <div className="space-y-4 text-slate-300 text-sm">
          <p>To store messages in MongoDB, follow these steps:</p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              Create a MongoDB account at{" "}
              <a href="https://mongodb.com" className="text-yellow-400 hover:underline">
                mongodb.com
              </a>
            </li>
            <li>Create a new project and cluster</li>
            <li>Get your connection string (MongoDB URI)</li>
            <li>
              Add it to your environment variables as{" "}
              <code className="bg-slate-700 px-2 py-1 rounded">MONGODB_URI</code>
            </li>
          </ol>
          <p className="text-yellow-400 mt-4 font-semibold">
            ℹ️ Messages will be automatically stored in MongoDB once configured.
          </p>
        </div>
      </div>

      {/* Clear Email Logs */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
        <h3 className="text-xl font-bold text-white mb-4">Clear Email Logs</h3>
        <p className="text-slate-400 mb-4">
          Permanently delete all stored messages and email logs. This action cannot be undone.
        </p>
        <button className="bg-red-900/50 hover:bg-red-900/70 text-red-400 font-semibold px-6 py-3 rounded-lg transition-colors">
          Clear All Logs
        </button>
      </div>
    </div>
  )
}
