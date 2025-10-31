"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  const categories = [
    { href: "/products?cat=General%20Grocery", label: "General Grocery" },
    { href: "/products?cat=Sweets", label: "Sweets" },
    { href: "/products?cat=Dry%20Fruits", label: "Dry Fruits" },
    { href: "/products?cat=Food", label: "Food" },
    { href: "/products?cat=Vape", label: "Vape" },
    { href: "/products?cat=Lottery", label: "Lottery" },
    { href: "/products?cat=Smoke", label: "Smoke" },
  ]

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products", dropdown: categories },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-white/20 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary/90 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="hidden sm:inline font-bold text-primary text-lg group-hover:text-accent transition-colors duration-300">
              Queens Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  className="text-foreground hover:text-accent transition-colors font-medium relative group animate-fade-in-down flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg border border-border rounded-md mt-3 w-48 py-2 z-50">
                    {link.dropdown.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-4 py-2 hover:bg-accent hover:text-white transition-all"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {links.map((link) => (
              <div key={link.href}>
                <div
                  onClick={() => {
                    if (link.dropdown) {
                      setProductOpen(!productOpen)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  className="flex justify-between items-center px-4 py-2 text-foreground hover:bg-white/20 hover:text-accent rounded-lg transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
                >
                  <span>{link.label}</span>
                  {link.dropdown && <ChevronDown size={18} />}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && productOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-white/10 hover:text-accent rounded-lg transition-all"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
