"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Leaf, Sparkles, Globe, ShieldCheck, Clock, PackageCheck } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback } from "react"

// ✅ Carousel Component
function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    const interval = setInterval(scrollNext, 3500)
    return () => clearInterval(interval)
  }, [scrollNext])

  return (
    <div className="embla relative rounded-xl overflow-hidden shadow-2xl ring-4 ring-yellow-400/30 animate-fade-in-up">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">

          {/* Slide 1 */}
          <div className="embla__slide flex-[0_0_100%] relative h-80 md:h-96">
            <Image
              src="/cofee.jpeg"
              alt="Market Carousel Image"
              fill
              className="object-cover brightness-90 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Slide 2 */}
          <div className="embla__slide flex-[0_0_100%] relative h-80 md:h-96">
            <Image
              src="/oil.jpeg"
              alt="Market Carousel Image"
              fill
              className="object-cover brightness-90 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Slide 3 */}
          <div className="embla__slide flex-[0_0_100%] relative h-80 md:h-96">
            <Image
              src="/products.jpeg"
              alt="Market Carousel Image"
              fill
              className="object-cover brightness-90 hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const highlights = [
    {
      icon: Sparkles,
      title: "2 Years of Excellence",
      description: "A trusted market serving our community with quality and dedication",
    },
    {
      icon: Globe,
      title: "Diverse Heritage",
      description: "Sudanese, Canadian, and African products—celebrating global flavors",
    },
    {
      icon: Leaf,
      title: "Mostly Organic",
      description: "Pure honey, grains, dry fruits and more—carefully selected for quality",
    },
    {
      icon: Heart,
      title: "Weekend Entertainment",
      description: "Games, cards, and entertainment programs—your community gathering place",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer Care",
      description: "We treat every customer like family, ensuring their satisfaction is our top priority.",
    },
    {
      icon: Leaf,
      title: "Quality & Freshness",
      description: "Every product is hand-checked to guarantee freshness and authenticity.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We're deeply invested in our Queens neighborhood and local businesses.",
    },
  ]

  const chooseUs = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      description: "Our suppliers are carefully vetted to ensure safe, authentic products.",
    },
    {
      icon: PackageCheck,
      title: "Unique Selection",
      description: "Find items rarely available in typical grocery stores.",
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Extended availability so you can shop on your schedule.",
    },
    {
      icon: Globe,
      title: "Cultural Diversity",
      description: "We celebrate heritage by offering products from multiple cultures.",
    },
    {
      icon: Leaf,
      title: "Better Ingredients",
      description: "Organic, wholesome products that support better lifestyles.",
    },
    {
      icon: Heart,
      title: "Friendly Staff",
      description: "Our team builds relationships—not transactions.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-100 animate-fade-in-up">

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-r from-yellow-400/30 via-orange-300/20 to-yellow-200/20 animate-fade-in-up">
        <Image
          src="/store-interior-shelves-products.jpg"
          alt="Queens Market Store"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-lg animate-fade-in-up">
              About Our Market
            </h1>
            <p className="text-lg md:text-xl text-white/90 animate-fade-in-up delay-150">
              Your Community's Global Marketplace
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="relative w-full max-w-6xl mx-auto px-4 py-16">
        <EmblaCarousel />
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-50 border border-yellow-200 rounded-xl p-8 text-center shadow-md hover:shadow-2xl hover:ring-2 hover:ring-yellow-400 transition-all duration-300 cursor-pointer animate-fade-in-up delay-[200ms]"
              >
                <div className="flex justify-center mb-4 glow-yellow">
                  <Icon size={42} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md animate-fade-in-up">
              Our Story
            </h2>

            <p className="text-gray-700 text-lg mb-4 animate-fade-in-up delay-100">
              Queens Convenient Market is a vibrant community hub that celebrates diversity and quality. For 2 years,
              we've served families, students, and seniors with a curated mix of Sudanese, Canadian, and African products.
            </p>

            <p className="text-gray-700 text-lg mb-4 animate-fade-in-up delay-150">
              We believe in ethical sourcing, sustainability, and authenticity. That’s why our shelves carry organic honey,
              premium nuts, spices, grains, and seasonal specialties.
            </p>

            <p className="text-gray-700 text-lg animate-fade-in-up delay-200">
              Our weekends are special—dominoes, cards, culture, and friendships. We’re more than a market; we’re a heartbeat
              of community life.
            </p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-200">
            <Image
              src="/small-family-grocery-store-fresh-products.jpg"
              alt="Our Market Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md animate-fade-in-up">
              Our Values
            </h2>
            <p className="text-gray-700 text-lg mt-2 animate-fade-in-up delay-100">
              We grow by earning trust—not just making sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white border rounded-xl p-8 text-center shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer animate-fade-in-up delay-[200ms]">
                  <Icon size={48} className="text-yellow-500 mx-auto mb-4 glow-yellow" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-base">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md animate-fade-in-up">
            Why Choose Us
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto animate-fade-in-up delay-100">
            We combine culture, convenience, and care to offer a shopping experience you’ll always come back to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white border rounded-xl p-8 text-center shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer animate-fade-in-up delay-[150ms]">
                <Icon size={48} className="text-yellow-500 mx-auto mb-4 glow-yellow" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-50 border rounded-xl p-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
            Visit Us Today
          </h2>

          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Discover unique flavors, meet amazing people, and support a store built on culture, care, and community spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cursor-pointer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
            <Link href="/products" className="cursor-pointer">
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-100 sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
