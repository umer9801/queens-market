"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const categories = [
    { name: "Dairy", icon: "🥛" },
    { name: "Bakery", icon: "🥐" },
    { name: "Beverages", icon: "🧃" },
    { name: "Snacks", icon: "🍪" },
  ]

  const testimonials = [
    {
      name: "Maria Garcia",
      text: "Best convenience market in Queens! Fresh products and friendly staff.",
      rating: 5,
    },
    {
      name: "John Smith",
      text: "Great selection and competitive prices. Always my go-to store.",
      rating: 5,
    },
    {
      name: "Lisa Wong",
      text: "Love the quality of their bakery items. Highly recommended!",
      rating: 5,
    },
  ]

  // ✅ Add your own pictures here (inside public/tour/)
  const tourImages = [
    "/mainhero.jpeg",
    "/bakery.jpeg",
    "/grocery.jpeg",
    "/store-interior-shelves-products.jpg",
    "/blueberry-muffins.png",
    "/granola-cereal.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tourImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [tourImages.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tourImages.length) % tourImages.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tourImages.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6ecd9] to-[#e8dbc2]">

      {/* ✅ HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/mainhero.jpeg"
          alt="Queens Market Hero"
          fill
          className="object-cover animate-zoom-in"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in-up">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#a57b45] to-[#d9c59a] text-transparent bg-clip-text drop-shadow-[0_0_18px_rgba(160,120,70,0.55)]">
              Welcome to Queens Convenient Market
            </h1>
            <p className="text-xl text-white/95 mb-6 max-w-2xl mx-auto leading-relaxed">
              Fresh groceries, community-driven service, and a shopping experience tailored just for you.
            </p>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:scale-105 bg-transparent px-8 py-5 text-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-full"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a57b45] to-[#d9c59a] text-transparent bg-clip-text drop-shadow-md">
            Our Categories
          </h2>
          <p className="text-gray-700 text-lg mt-3">
            Explore the best essentials your home deserves — fresh, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/products?category=${cat.name.toLowerCase()}`}>
              <div className="bg-white border border-[#e8dbc2] rounded-xl p-8 text-center hover:shadow-[0_0_12px_rgba(170,120,70,0.25)] transition-all cursor-pointer transform hover:-translate-y-2 duration-300 group">
                <div className="text-5xl mb-4 inline-block group-hover:scale-125 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#b48a54] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Quality-picked items ready for your daily needs.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="bg-gradient-to-r from-[#f1e3cb] to-[#e8dbc2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="/small-family-grocery-store-fresh-products.jpg"
                alt="About Queens Market"
                width={450}
                height={450}
                className="rounded-lg shadow-xl hover:shadow-[0_0_20px_rgba(170,120,70,0.4)] transition-shadow duration-300 hover:scale-105 transform"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a57b45] to-[#d9c59a] text-transparent bg-clip-text drop-shadow-lg mb-4">
                About Our Market
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                For over a decade, Queens Convenient Market has been serving our community with
                quality products, competitive prices, and exceptional customer service.
                We proudly support local vendors and fresh homegrown goods.
              </p>
              <p className="text-gray-600 mb-6">
                From bakery delights to daily household essentials, we ensure every item meets
                our standard of freshness.
              </p>
              <Button className="bg-[#a57b45] hover:bg-[#916a39] text-white shadow-[0_0_12px_rgba(170,120,70,0.35)] px-8 py-5 text-lg rounded-full">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a57b45] to-[#d9c59a] text-transparent bg-clip-text drop-shadow-md">
            What Customers Say
          </h2>
          <p className="text-gray-700 text-lg">Trusted by hundreds of families every week.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e8dbc2] rounded-lg p-6 hover:shadow-[0_0_15px_rgba(170,120,70,0.25)] transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#b48a54] text-[#b48a54]"
                  />
                ))}
              </div>
              <p className="text-gray-800 mb-4">{testimonial.text}</p>
              <p className="font-bold bg-gradient-to-r from-[#a57b45] to-[#d9c59a] bg-clip-text text-transparent">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ UPDATED TOUR SECTION WITH CAROUSEL */}
      <section className="bg-[#f2e8d5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#a57b45] to-[#d9c59a] text-transparent bg-clip-text drop-shadow-md">
              Tour Our Market
            </h2>
            <p className="text-gray-700 text-lg">
              Experience warmth, freshness, and care in every aisle.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tourImages.map((img, idx) => (
                <div key={idx} className="min-w-full h-[350px] relative">
                  <Image
                    src={img}
                    alt={`Tour ${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
