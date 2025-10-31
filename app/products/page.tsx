"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high">("name")

  const products = [
    // Dairy
    {
      id: 1,
      name: "Organic Milk",
      category: "Dairy",
      price: 3.99,
      image: "/organic-milk-bottle.jpg",
      description: "Fresh organic whole milk sourced from local farms.",
    },
    {
      id: 2,
      name: "Greek Yogurt",
      category: "Dairy",
      price: 5.99,
      image: "/greek-yogurt-container.png",
      description: "Rich, creamy texture—perfect for breakfast and smoothies.",
    },
    {
      id: 3,
      name: "Cheddar Cheese",
      category: "Dairy",
      price: 4.49,
      image: "/cheddar-cheese-block.png",
      description: "Sharp cheddar cheese aged to perfection.",
    },
    {
      id: 4,
      name: "Fresh Butter",
      category: "Dairy",
      price: 4.99,
      image: "/butter-stick.png",
      description: "Quality butter ideal for baking and cooking.",
    },

    // Bakery
    {
      id: 5,
      name: "Sourdough Bread",
      category: "Bakery",
      price: 4.99,
      image: "/sourdough-loaf.png",
      description: "Naturally fermented sourdough loaf.",
    },
    {
      id: 6,
      name: "Croissants",
      category: "Bakery",
      price: 3.49,
      image: "/croissants-pastry.jpg",
      description: "Soft buttery croissants, perfect for breakfast.",
    },
    {
      id: 7,
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 3.99,
      image: "/whole-wheat-bread.png",
      description: "Healthy whole wheat loaf made fresh daily.",
    },
    {
      id: 8,
      name: "Blueberry Muffins",
      category: "Bakery",
      price: 5.49,
      image: "/blueberry-muffins.png",
      description: "Moist muffins packed with fresh blueberries.",
    },

    // Beverages
    {
      id: 9,
      name: "Fresh Orange Juice",
      category: "Beverages",
      price: 4.99,
      image: "/orange-juice-bottle.jpg",
      description: "100% cold-pressed orange juice.",
    },
    {
      id: 10,
      name: "Green Tea",
      category: "Beverages",
      price: 3.49,
      image: "/green-tea-box.png",
      description: "Organic detoxifying green tea.",
    },
    {
      id: 11,
      name: "Iced Coffee",
      category: "Beverages",
      price: 5.99,
      image: "/iced-coffee-bottle.jpg",
      description: "Craft iced coffee brew with bold flavor.",
    },
    {
      id: 12,
      name: "Sparkling Water",
      category: "Beverages",
      price: 2.99,
      image: "/sparkling-water-bottle.png",
      description: "Refreshing carbonated hydration.",
    },

    // Snacks
    {
      id: 13,
      name: "Almond Granola",
      category: "Snacks",
      price: 6.99,
      image: "/granola-cereal.png",
      description: "Crunchy, healthy almond granola.",
    },
    {
      id: 14,
      name: "Dark Chocolate Chips",
      category: "Snacks",
      price: 3.99,
      image: "/dark-chocolate-chips.jpg",
      description: "Premium dark chocolate chips for baking.",
    },
    {
      id: 15,
      name: "Mixed Nuts",
      category: "Snacks",
      price: 7.99,
      image: "/mixed-nuts-assortment.jpg",
      description: "Nutritious blend of assorted nuts.",
    },
    {
      id: 16,
      name: "Honey Crackers",
      category: "Snacks",
      price: 2.99,
      image: "/honey-crackers-box.jpg",
      description: "Lightly sweet honey-infused crackers.",
    },
  ]

  const categories = ["Dairy", "Bakery", "Beverages", "Snacks"]

  const filteredAndSorted = useMemo(() => {
    const filtered = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

    return filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return 0
    })
  }, [selectedCategory, sortBy])

  return (
    <main className="min-h-screen">

      {/* ✅ New Hero Section With Image */}
      <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src="/bakery-fresh-bread-display.jpg"
          fill
          alt="Market View"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#a57b45] to-[#d9c59a] bg-clip-text text-transparent drop-shadow-lg">
            Fresh & Quality Products
          </h1>
          <p className="max-w-2xl text-white/90 text-lg">
            Explore our hand-picked selection of daily essentials, made with purity and quality at heart.
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className="bg-muted border-b border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-primary" />
                <span className="font-semibold text-foreground">Categories</span>
              </div>
              <div className="flex flex-wrap gap-2 animate-stagger">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={`${selectedCategory === null ? "bg-primary hover:bg-primary/90 text-white" : ""} transition-all duration-300 hover:scale-105`}
                >
                  All Products
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    className={`${selectedCategory === cat ? "bg-primary hover:bg-primary/90 text-white" : ""} transition-all duration-300 hover:scale-105`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sorting */}
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <label className="font-semibold text-foreground">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "price-low" | "price-high")}
                className="px-4 py-2 border border-border rounded-md bg-card text-foreground hover:border-accent transition-colors"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredAndSorted.length === 0 ? (
          <div className="text-center py-12 animate-fade-in-up">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
            {filteredAndSorted.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="text-sm mt-3 text-foreground/80 leading-snug">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-12 text-muted-foreground animate-fade-in-up">
          <p>
            Showing {filteredAndSorted.length} of {products.length} products
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      </section>
    </main>
  )
}
