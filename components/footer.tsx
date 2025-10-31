"use client"

import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-yellow-50 via-yellow-100 to-yellow-200 text-gray-900 mt-20 shadow-inner animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-sm animate-pulse">
              Queens Convenient Market
            </h3>
            <p className="text-gray-800/90 leading-relaxed">
              Your local destination for quality snacks, essentials, and late-night convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-sm animate-pulse">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-900/80 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline glow-hover"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-extrabold text-lg mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-sm animate-pulse">
              Contact
            </h3>
            <div className="space-y-3">

              <a
                href="tel:+15194985174"
                className="flex items-center gap-2 text-gray-900/80 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline glow-hover"
              >
                <Phone size={18} />
                +1 519-498-5174
              </a>

              <a
                href="https://maps.app.goo.gl/cUnB9Memq5z7aURo8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-900/80 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline glow-hover"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                91 Queen St S, Kitchener, ON N2G 1V9, Canada
              </a>

              <a
                href="mailto:91queenstore@gmail.com"
                className="flex items-center gap-2 text-gray-900/80 hover:text-gray-900 transition-colors duration-300 underline-offset-4 hover:underline glow-hover"
              >
                <Mail size={18} />
                91queenstore@gmail.com
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-yellow-300/40 pt-8 text-center text-gray-700/80">
          <p>&copy; 2025 Queens Convenient Market. All rights reserved.</p>
        </div>
      </div>

      {/* Glow CSS */}
      <style jsx>{`
        .glow-hover:hover {
          text-shadow: 0 0 4px rgba(255,215,0,0.4), 0 0 8px rgba(255,223,100,0.3);
        }
      `}</style>
    </footer>
  )
}
