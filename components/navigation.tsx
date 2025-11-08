"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#e3cda1]/80 via-[#f5edd8]/50 to-[#ffffff]/40 backdrop-blur-md shadow-md border-b border-[#e3cda1]/30 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#d9c59a]/90 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="hidden sm:inline font-bold text-[#7a5e3b] text-lg group-hover:text-[#a57b45] transition-colors duration-300">
              Queens Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-[#7a5e3b] hover:text-[#a57b45] transition-colors font-medium relative group animate-fade-in-down flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a57b45] group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <div className="absolute hidden group-hover:block bg-[#f5edd8]/90 backdrop-blur-md shadow-lg border border-[#e3cda1]/50 rounded-md mt-3 w-48 py-2 z-50">
                    {link.dropdown.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-4 py-2 text-[#7a5e3b] hover:bg-[#d9c59a]/50 hover:text-white transition-all rounded-md"
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
            className="md:hidden p-2 hover:bg-[#e3cda1]/30 rounded-lg transition-colors"
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
                <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-transparent hover:bg-[#f5edd8]/40 transition-all duration-300">

                  {/* Link itself */}
                  <Link
                    href={link.href}
                    className="text-[#7a5e3b] hover:text-[#a57b45] flex-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown toggle */}
                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleDropdown(link.label)
                      }}
                    >
                      <ChevronDown
                        size={18}
                        className={`${openDropdown === link.label ? "rotate-180" : ""} transition-transform duration-300`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.dropdown && openDropdown === link.label && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.dropdown.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-4 py-2 text-sm text-[#7a5e3b]/80 hover:bg-[#d9c59a]/30 hover:text-white rounded-lg transition-all"
                        onClick={() => setIsOpen(false)}
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
