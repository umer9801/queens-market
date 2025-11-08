"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high">("name")

  const products = [
    // FOOD (Dairy / Bakery)
    {
      id: 1,
      name: "Organic Milk",
      category: "Food",
      price: 3.99,
      image: "/organic-milk-bottle.jpg",
      description: "Fresh organic whole milk sourced from local farms.",
    },
    {
      id: 2,
      name: "Greek Yogurt",
      category: "Food",
      price: 5.99,
      image: "/greek-yogurt-container.png",
      description: "Rich, creamy texture—perfect for breakfast and smoothies.",
    },
    {
      id: 3,
      name: "Cheddar Cheese",
      category: "Food",
      price: 4.49,
      image: "/cheddar-cheese-block.png",
      description: "Sharp cheddar cheese aged to perfection.",
    },
    {
      id: 4,
      name: "Fresh Butter",
      category: "Food",
      price: 4.99,
      image: "/butter-stick.png",
      description: "Quality butter ideal for baking and cooking.",
    },
    {
      id: 5,
      name: "Sourdough Bread",
      category: "Food",
      price: 4.99,
      image: "/sourdough-loaf.png",
      description: "Naturally fermented sourdough loaf.",
    },
    {
      id: 6,
      name: "Croissants",
      category: "Food",
      price: 3.49,
      image: "/croissants-pastry.jpg",
      description: "Soft buttery croissants, perfect for breakfast.",
    },
    {
      id: 7,
      name: "Whole Wheat Bread",
      category: "Food",
      price: 3.99,
      image: "/whole-wheat-bread.png",
      description: "Healthy whole wheat loaf made fresh daily.",
    },
    {
      id: 8,
      name: "Blueberry Muffins",
      category: "Sweets",
      price: 5.49,
      image: "/blueberry-muffins.png",
      description: "Moist muffins packed with fresh blueberries.",
    },

    // GENERAL GROCERY (Drinks)
    {
      id: 9,
      name: "Fresh Orange Juice",
      category: "General Grocery",
      price: 4.99,
      image: "/orange-juice-bottle.jpg",
      description: "100% cold-pressed orange juice.",
    },
    {
      id: 10,
      name: "Green Tea",
      category: "General Grocery",
      price: 3.49,
      image: "/green-tea-box.png",
      description: "Organic detoxifying green tea.",
    },
    {
      id: 11,
      name: "Iced Coffee",
      category: "General Grocery",
      price: 5.99,
      image: "/iced-coffee-bottle.jpg",
      description: "Craft iced coffee brew with bold flavor.",
    },
    {
      id: 12,
      name: "Sparkling Water",
      category: "General Grocery",
      price: 2.99,
      image: "/sparkling-water-bottle.png",
      description: "Refreshing carbonated hydration.",
    },

    // DRY FRUITS
    {
      id: 13,
      name: "Almond Granola",
      category: "Dry Fruits",
      price: 6.99,
      image: "/granola-cereal.png",
      description: "Crunchy, healthy almond granola.",
    },
    {
      id: 15,
      name: "Mixed Nuts",
      category: "Dry Fruits",
      price: 7.99,
      image: "/mixed-nuts-assortment.jpg",
      description: "Nutritious blend of assorted nuts.",
    },

    // SWEETS
    {
      id: 14,
      name: "Dark Chocolate Chips",
      category: "Sweets",
      price: 3.99,
      image: "/dark-chocolate-chips.jpg",
      description: "Premium dark chocolate chips for baking.",
    },
    {
      id: 16,
      name: "Honey Crackers",
      category: "Sweets",
      price: 2.99,
      image: "/honey-crackers-box.jpg",
      description: "Lightly sweet honey-infused crackers.",
    },

    // Vape
    {
      id: 17,
      name: "Mint Vape Pod",
      category: "Vape",
      price: 12.99,
      image: "/vape-mint.png",
      description: "Smooth mint flavor vape pod.",
    },

    // Smoke
    {
      id: 18,
      name: "Cigarette Pack",
      category: "Smoke",
      price: 9.99,
      image: "/cigarette-pack.png",
      description: "Premium filtered cigarettes pack.",
    },

    // Lottery
    {
      id: 19,
      name: "Lottery Ticket",
      category: "Lottery",
      price: 1.99,
      image: "/lottery-ticket.png",
      description: "Try your luck and win big!",
    },
  ]

  const categories = [
    "General Grocery",
    "Sweets",
    "Dry Fruits",
    "Food",
    "Vape",
    "Lottery",
    "Smoke",
  ]

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
    <main className="min-h-screen bg-yellow-50 text-gray-900">

      {/* HERO IMAGE */}
      <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
     <Image
  src="/bakery-fresh-bread-display.jpg"
  fill
  alt="Market View"
  className="object-cover brightness-90 blur-sm"
/>

        <div className="absolute inset-0 bg-yellow-100/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            Fresh & Quality Products
          </h1>
          <p className="max-w-2xl text-gray-900/90 text-lg">
            Explore our hand-picked selection of daily essentials, made with purity and quality at heart.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-yellow-50 border-b border-yellow-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">

            {/* CATEGORY FILTER */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-yellow-700" />
                <span className="font-semibold text-gray-900">Categories</span>
              </div>
              <div className="flex flex-wrap gap-2 animate-stagger">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={`${selectedCategory === null ? "bg-yellow-600 hover:bg-yellow-700 text-white" : ""} transition-all duration-300 hover:scale-105`}
                >
                  All Products
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    className={`${selectedCategory === cat ? "bg-yellow-600 hover:bg-yellow-700 text-white" : ""} transition-all duration-300 hover:scale-105`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* SORTING */}
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <label className="font-semibold text-gray-900">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "price-low" | "price-high")}
                className="px-4 py-2 border border-yellow-300 rounded-md bg-yellow-100 text-gray-900 hover:border-yellow-500 transition-colors"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredAndSorted.length === 0 ? (
          <div className="text-center py-12 animate-fade-in-up">
            <p className="text-gray-700 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
            {filteredAndSorted.map((product) => (
              <div
                key={product.id}
                className="bg-yellow-100 border border-yellow-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-sm mt-3 text-gray-800/80 leading-snug">
                    {product.description}
                  </p>
                  <p className="mt-2 font-semibold text-yellow-700">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12 text-gray-700 animate-fade-in-up">
          <p>
            Showing {filteredAndSorted.length} of {products.length} products
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      </section>
    </main>
  )
}
