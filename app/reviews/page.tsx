"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Maria Garcia",
      rating: 5,
      date: "2024-10-20",
      title: "Best convenience market in Queens!",
      text: "Fresh products, friendly staff, and great prices. I've been shopping here for years and never had a bad experience. Highly recommended!",
      verified: true,
    },
    {
      id: 2,
      name: "John Smith",
      rating: 5,
      date: "2024-10-18",
      title: "Excellent quality and selection",
      text: "Great selection and competitive prices. The staff is always helpful and the store is clean. Always my go-to store for groceries.",
      verified: true,
    },
    {
      id: 3,
      name: "Lisa Wong",
      rating: 5,
      date: "2024-10-15",
      title: "Love the bakery items",
      text: "The quality of their bakery items is outstanding. Fresh bread and pastries every day. This is my favorite place to shop in Queens!",
      verified: true,
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      rating: 4,
      date: "2024-10-12",
      title: "Great local market",
      text: "Always stocked with fresh items. The only thing I'd suggest is expanding their organic section a bit more.",
      verified: true,
    },
    {
      id: 5,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-10-10",
      title: "Wonderful community store",
      text: "Not just a market, but part of our community. The owners care about their customers and it shows in every interaction.",
      verified: true,
    },
    {
      id: 6,
      name: "Carlos Martinez",
      rating: 4,
      date: "2024-10-08",
      title: "Good quality produce",
      text: "Fresh produce and fair prices. Sometimes crowded on weekends, but overall great place to shop.",
      verified: true,
    },
  ])

  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    text: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: Number.parseInt(newReview.rating.toString()),
      date: new Date().toISOString().split("T")[0],
      title: newReview.title,
      text: newReview.text,
      verified: false,
    }
    setReviews([review, ...reviews])
    setNewReview({ name: "", email: "", rating: 5, title: "", text: "" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  const ratingCounts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Customer Reviews</h1>
          <p className="text-lg text-white/90">Trusted by hundreds of satisfied customers in Queens</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="bg-muted py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Average Rating */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="text-5xl font-bold text-primary mb-2">{avgRating}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={
                        i < Math.round(Number.parseFloat(avgRating))
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4">Rating Breakdown</h3>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 min-w-fit">
                    <span className="font-semibold text-foreground w-6">{rating}</span>
                    <Star size={16} className="fill-accent text-accent" />
                  </div>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-accent rounded-full h-2"
                      style={{
                        width: `${(ratingCounts[rating as keyof typeof ratingCounts] / reviews.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-muted-foreground text-sm min-w-fit">
                    {ratingCounts[rating as keyof typeof ratingCounts]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Review Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-muted border border-border rounded-lg p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Share Your Experience</h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-green-600 font-bold text-lg mb-2">Thank you for your review!</div>
              <p className="text-green-700">Your review has been submitted and will be visible soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email (not published)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newReview.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-semibold text-foreground mb-2">
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Good</option>
                  <option value="2">2 Stars - Fair</option>
                  <option value="1">1 Star - Poor</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2">
                  Review Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newReview.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Excellent quality and service"
                />
              </div>

              <div>
                <label htmlFor="text" className="block text-sm font-semibold text-foreground mb-2">
                  Your Review
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={newReview.text}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Share your experience shopping with us..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                Submit Review
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Reviews List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What Our Customers Say</h2>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Verified</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"}
                    />
                  ))}
                </div>
              </div>

              <h4 className="font-bold text-lg text-foreground mb-2">{review.title}</h4>
              <p className="text-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
