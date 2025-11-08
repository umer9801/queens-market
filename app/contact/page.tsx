"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
=======
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)

    try {
      // Send message to backend API
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to send message")
      }

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
    }
>>>>>>> 739d109 (Initial commit - Added project files)

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "91 Queen St S, Kitchener, ON N2G 1V9, Canada",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 519-498-5174",
      href: "tel:+15194985174",
    },
    {
      icon: Mail,
      title: "Email",
      content: "91queenstore@gmail.com",
      href: "mailto:91queenstore@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon–Thu: 10AM–12PM / Fri–Sun: 10AM–2AM",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-100">
<<<<<<< HEAD

=======
>>>>>>> 739d109 (Initial commit - Added project files)
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/store-hero.jpg"
          alt="Store Hero"
          fill
          className="object-cover filter blur-sm brightness-75 scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg">
            Queens Convenient Market
          </h1>
<<<<<<< HEAD
          <p className="text-lg text-gray-800 drop-shadow-md">
            Your neighborhood everyday convenience store
          </p>
=======
          <p className="text-lg text-gray-800 drop-shadow-md">Your neighborhood everyday convenience store</p>
>>>>>>> 739d109 (Initial commit - Added project files)
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <div
                key={idx}
                className="bg-white border border-yellow-200 rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
                  {info.title}
                </h3>

                {info.href ? (
<<<<<<< HEAD
                  <a
                    href={info.href}
                    className="text-yellow-600 hover:text-yellow-700 underline transition-colors"
                  >
=======
                  <a href={info.href} className="text-yellow-600 hover:text-yellow-700 underline transition-colors">
>>>>>>> 739d109 (Initial commit - Added project files)
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.content}</p>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<<<<<<< HEAD

=======
>>>>>>> 739d109 (Initial commit - Added project files)
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <div className="text-yellow-600 font-bold text-lg mb-2">Thank you for your message!</div>
                  <p className="text-yellow-700">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Message..."
                    className="w-full px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  />
<<<<<<< HEAD
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3">
=======
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3"
                  >
>>>>>>> 739d109 (Initial commit - Added project files)
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="flex flex-col gap-8">
              <a
                href="https://maps.app.goo.gl/cUnB9Memq5z7aURo8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image src="/store-location-map.jpg" alt="Store Location" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <MapPin size={48} className="text-yellow-500" />
                  <p className="text-lg font-semibold text-yellow-400 underline">Find Us On Map</p>
                </div>
              </a>

              <div className="bg-white border border-yellow-200 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
                  Visit Us
                </h3>
                <p className="text-gray-700">91 Queen St S, Kitchener, ON N2G 1V9, Canada</p>
                <p className="text-gray-700">Mon–Thu: 10:00 AM – 12:00 PM</p>
                <p className="text-gray-700">Fri–Sun: 10:00 AM – 2:00 AM</p>
              </div>
            </div>
<<<<<<< HEAD

=======
>>>>>>> 739d109 (Initial commit - Added project files)
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-yellow-200 rounded-lg p-12 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new products, special offers, and community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<<<<<<< HEAD
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
=======
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-yellow-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
>>>>>>> 739d109 (Initial commit - Added project files)
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/15194985174"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-4 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110 z-50 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
<<<<<<< HEAD
          <path d="M16.027 3.009c-7.17 0-12.99 5.82-12.99 12.99 0 2.289.6 4.52 1.74 6.49L3 29l6.688-1.74c1.9 1.04 4.06 1.59 6.34 1.59h.01c7.17 0 12.99-5.82 12.99-12.99S23.197 3.009 16.027 3.009zm7.27 18.63c-.31.87-1.8 1.7-2.5 1.81-.64.12-1.45.17-2.35-.15-.54-.17-1.23-.4-2.12-.78-3.73-1.62-6.15-5.41-6.34-5.66-.18-.25-1.51-2-1.51-3.81s.93-2.7 1.26-3.07c.31-.38.67-.48.9-.48.22 0 .45 0 .64.01.2.01.48-.08.75.57.31.76 1.06 2.62 1.15 2.8.09.19.15.41.03.66-.12.25-.19.4-.38.61-.19.22-.4.49-.57.66-.19.19-.38.4-.17.78.22.38.98 1.61 2.1 2.61 1.45 1.29 2.67 1.7 3.06 1.89.38.19.6.16.82-.09.22-.25.95-1.11 1.2-1.49.25-.38.5-.31.84-.19.34.12 2.18 1.03 2.55 1.22.38.19.63.28.73.44.09.17.09.91-.22 1.78z"/>
=======
          <path d="M16.027 3.009c-7.17 0-12.99 5.82-12.99 12.99 0 2.289.6 4.52 1.74 6.49L3 29l6.688-1.74c1.9 1.04 4.06 1.59 6.34 1.59h.01c7.17 0 12.99-5.82 12.99-12.99S23.197 3.009 16.027 3.009zm7.27 18.63c-.31.87-1.8 1.7-2.5 1.81-.64.12-1.45.17-2.35-.15-.54-.17-1.23-.4-2.12-.78-3.73-1.62-6.15-5.41-6.34-5.66-.18-.25-1.51-2-1.51-3.81s.93-2.7 1.26-3.07c.31-.38.67-.48.9-.48.22 0 .45 0 .64.01.2.01.48-.08.75.57.31.76 1.06 2.62 1.15 2.8.09.19.15.41.03.66-.12.25-.19.4-.38.61-.19.22-.4.49-.57.66-.19.19-.38.4-.17.78.22.38.98 1.61 2.1 2.61 1.45 1.29 2.67 1.7 3.06 1.89.38.19.6.16.82-.09.22-.25.95-1.11 1.2-1.49.25-.38.5-.31.84-.19.34.12 2.18 1.03 2.55 1.22.38.19.63.28.73.44.09.17.09.91-.22 1.78z" />
>>>>>>> 739d109 (Initial commit - Added project files)
        </svg>
      </a>
    </main>
  )
}
