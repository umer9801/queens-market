"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Leaf, Sparkles, Globe, ShieldCheck, Clock, PackageCheck } from "lucide-react"

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
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden bg-neutral-900">
        <Image
          src="/store-interior-shelves-products.jpg"
          alt="Queens Market Store"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#e6d2a8] to-[#b69b75] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(182,155,117,0.7)]">
              About Our Market
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your Community's Global Marketplace
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={42} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#e3cda1] to-[#aa8b63] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(160,135,102,0.7)]">
              Our Story
            </h2>

            <p className="text-muted-foreground text-lg mb-4">
              Queens Convenient Market is a vibrant community hub that celebrates diversity and quality. For 2 years,
              we've served families, students, and seniors with a curated mix of Sudanese, Canadian, and African products.
            </p>

            <p className="text-muted-foreground text-lg mb-4">
              We believe in ethical sourcing, sustainability, and authenticity. That’s why our shelves carry organic honey,
              premium nuts, spices, grains, and seasonal specialties.
            </p>

            <p className="text-muted-foreground text-lg">
              Our weekends are special—dominoes, cards, culture, and friendships. We’re more than a market; we’re a heartbeat
              of community life.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
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
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#e3cda1] to-[#aa8b63] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(160,135,102,0.7)]">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg mt-2">
              We grow by earning trust—not just making sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-card border rounded-lg p-8 text-center">
                  <Icon size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-base">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#e3cda1] to-[#aa8b63] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(160,135,102,0.7)]">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We combine culture, convenience, and care to offer a shopping experience you’ll always come back to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-card border rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow">
                <Icon size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-muted border rounded-lg p-12 text-center">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#e3cda1] to-[#aa8b63] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(160,135,102,0.7)]">
            Visit Us Today
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover unique flavors, meet amazing people, and support a store built on culture, care, and community spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 sm:w-auto">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
