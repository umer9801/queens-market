"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const categories = [
    { name: "General Grocery", icon: "🛒", slug: "general-grocery" },
    { name: "Sweets", icon: "🍬", slug: "sweets" },
    { name: "Dry Fruits", icon: "🥜", slug: "dry-fruits" },
    { name: "Food", icon: "🍲", slug: "food" },
    { name: "Vape", icon: "💨", slug: "vape" },
    { name: "Lottery", icon: "🎟️", slug: "lottery" },
    { name: "Smoke", icon: "🚬", slug: "smoke" },
  ]

  const testimonials = [
    { name: "Maria Garcia", text: "Best convenience market in Queens! Fresh products and friendly staff.", rating: 5 },
    { name: "John Smith", text: "Great selection and competitive prices. Always my go-to store.", rating: 5 },
    { name: "Lisa Wong", text: "Love the quality of their bakery items. Highly recommended!", rating: 5 },
  ]

  const tourImages = [
    "/mainhero.jpeg",
    "/bakery.jpeg",
    "/grocery.jpeg",
    "/store-interior-shelves-products.jpg",
    "/blueberry-muffins.png",
    "/granola-cereal.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tourImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [tourImages.length])

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + tourImages.length) % tourImages.length)
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % tourImages.length)

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-100 animate-fade-in-up">

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="relative h-[500px] overflow-hidden">
  <Image
    src="/mainhero.jpeg"
    alt="Queens Market Hero"
    fill
    className="object-cover filter blur-sm brightness-75 scale-105"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg animate-fade-in-up">
        Welcome to Queens Convenient Market
      </h1>
      <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-150">
        Fresh groceries, community-driven service, and a shopping experience tailored just for you.
      </p>
      <Link href="/about" className="cursor-pointer">
        <Button
          variant="outline"
          className="cursor-pointer border-yellow-500 text-yellow-500 hover:bg-yellow-100 hover:text-yellow-600 px-8 py-5 text-lg shadow-lg rounded-full transition-all animate-pulse"
        >
          Learn More
        </Button>
      </Link>
    </div>
  </div>
</section>

          
      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 drop-shadow-md">
            Our Categories
          </h2>
          <p className="text-gray-700 text-lg mt-3">
            Explore the best essentials your home deserves — fresh, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="cursor-pointer"
            >
              <div className="bg-white border border-yellow-200 rounded-xl p-8 text-center hover:shadow-2xl hover:ring-2 hover:ring-yellow-400 transition-all cursor-pointer transform hover:-translate-y-2 duration-300 group animate-fade-in-up">
                <div className="text-5xl mb-4 inline-block group-hover:scale-125 transition-transform duration-300 glow-yellow">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
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

      {/* ABOUT SECTION */}
      <section className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="/small-family-grocery-store-fresh-products.jpg"
                alt="About Queens Market"
                width={450}
                height={450}
                className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-gray-900 drop-shadow-md mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                About Our Market
              </h2>
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                For over a decade, Queens Convenient Market has been serving our community with
                quality products, competitive prices, and exceptional customer service.
                We proudly support local vendors and fresh homegrown goods.
              </p>
              <p className="text-gray-700 mb-6">
                From bakery delights to daily household essentials, we ensure every item meets
                our standard of freshness.
              </p>
              <Link href="/about" className="cursor-pointer">
                <Button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white shadow-md px-8 py-5 text-lg rounded-full animate-pulse">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 drop-shadow-md">
            What Customers Say
          </h2>
          <p className="text-gray-700 text-lg">Trusted by hundreds of families every week.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-yellow-200 rounded-lg p-6 hover:shadow-2xl hover:ring-1 hover:ring-yellow-400 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500 glow-yellow" />
                ))}
              </div>
              <p className="text-gray-800 mb-4">{testimonial.text}</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOUR SECTION */}
      <section className="bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 drop-shadow-md">
              Tour Our Market
            </h2>
            <p className="text-gray-700 text-lg">
              Experience warmth, freshness, and care in every aisle.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tourImages.map((img, idx) => (
                <div key={idx} className="min-w-full h-[350px] relative">
                  <Image src={img} alt={`Tour ${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
