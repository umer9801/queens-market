"use client"

import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Queens Convenient Market</h3>
            <p className="text-white/80">
              Your local destination for quality snacks, essentials, and late-night convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white underline-offset-4 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white underline-offset-4 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white underline-offset-4 hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white underline-offset-4 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">

              {/* Phone */}
              <a
                href="tel:+15194985174"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                <Phone size={18} />
                +1 519-498-5174
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/pNi8oZdQ5q55ybZQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                91 Queen St S, Kitchener, ON N2G 1V9, Canada
              </a>

              {/* Email */}
              <a
                href="mailto:91queenstore@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                <Mail size={18} />
                91queenstore@gmail.com
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2025 Queens Convenient Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
