"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const categories = [
  { id: "all", name: "All Products" },
  { id: "personal-care", name: "Personal Care" },
  { id: "pet-care", name: "Pet Care" },
  { id: "cleaning", name: "Cleaning Products" },
]

const products = [
  // Personal Care
  {
    id: 1,
    name: "Premium Shampoo Collection",
    category: "personal-care",
    description: "Professional-grade hair care for all hair types",
    features: ["Sulfate-free options", "Multiple formulas", "Salon quality"],
  },
  {
    id: 2,
    name: "Body Wash Essentials",
    category: "personal-care",
    description: "Moisturizing body washes for daily use",
    features: ["Gentle formula", "Long-lasting scent", "Skin-nourishing"],
  },
  {
    id: 3,
    name: "Skincare Basics",
    category: "personal-care",
    description: "Essential skincare products for healthy skin",
    features: ["Dermatologist tested", "All skin types", "Daily use"],
  },
  {
    id: 4,
    name: "Oral Care Products",
    category: "personal-care",
    description: "Complete dental hygiene solutions",
    features: ["ADA approved", "Fresh breath", "Cavity protection"],
  },
  // Pet Care
  {
    id: 5,
    name: "Premium Pet Shampoo",
    category: "pet-care",
    description: "Gentle cleaning for dogs and cats",
    features: ["Vet recommended", "Hypoallergenic", "Flea & tick defense"],
  },
  {
    id: 6,
    name: "Pet Grooming Supplies",
    category: "pet-care",
    description: "Professional grooming tools and products",
    features: ["Complete kits", "Easy to use", "Pet-safe"],
  },
  {
    id: 7,
    name: "Pet Dental Care",
    category: "pet-care",
    description: "Oral hygiene products for pets",
    features: ["Fresh breath", "Plaque control", "Tasty formulas"],
  },
  {
    id: 8,
    name: "Pet Wellness Products",
    category: "pet-care",
    description: "Supplements and care items for pet health",
    features: ["Natural ingredients", "Vet approved", "Multiple formats"],
  },
  // Cleaning Products
  {
    id: 9,
    name: "Multi-Surface Cleaners",
    category: "cleaning",
    description: "All-purpose cleaning solutions",
    features: ["Streak-free", "Powerful formula", "Fresh scents"],
  },
  {
    id: 10,
    name: "Laundry Essentials",
    category: "cleaning",
    description: "Detergents and fabric care products",
    features: ["High efficiency", "Stain fighting", "Color safe"],
  },
  {
    id: 11,
    name: "Kitchen Cleaners",
    category: "cleaning",
    description: "Specialized cleaning for kitchen surfaces",
    features: ["Grease cutting", "Food safe", "Antibacterial"],
  },
  {
    id: 12,
    name: "Bathroom Cleaners",
    category: "cleaning",
    description: "Powerful bathroom cleaning solutions",
    features: ["Lime & scale removal", "Disinfecting", "Mold prevention"],
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  "personal-care": { bg: "bg-primary/10", text: "text-primary" },
  "pet-care": { bg: "bg-secondary/10", text: "text-secondary" },
  "cleaning": { bg: "bg-amber-500/10", text: "text-amber-600" },
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Quality essentials for personal care, pet care, and cleaning
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <Filter className="w-4 h-4 hidden" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => {
                const colors = categoryColors[product.category]
                return (
                  <motion.div key={product.id} variants={fadeInUp}>
                    <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-0">
                        {/* Product Image Placeholder */}
                        <div className={`h-48 w-full relative overflow-hidden`}>
                           <Image
                             src={`/images/products/unique/product-${product.id}.jpg`}
                             alt={product.name}
                             fill
                             className="object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} mb-3`}>
                            {categories.find(c => c.id === product.category)?.name}
                          </span>
                          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {product.description}
                          </p>
                          <ul className="space-y-1">
                            {product.features.map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Amazon CTA */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop on Amazon
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Many of our products are available for purchase on Amazon with fast Prime shipping.
            </p>
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF9900] text-foreground font-semibold rounded-lg hover:bg-[#FF9900]/90 transition-colors"
            >
              Visit Our Amazon Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Interested in Wholesale?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              We offer competitive wholesale pricing for retailers and businesses. Get in touch to learn more about our B2B programs.
            </p>
            <a
              href="/wholesale"
              className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground font-semibold rounded-lg hover:bg-card/90 transition-colors"
            >
              Wholesale Inquiries
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
