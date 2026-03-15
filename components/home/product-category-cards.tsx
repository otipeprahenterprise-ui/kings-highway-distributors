"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Soaps, grooming products, and hygiene essentials.",
    image: "/images/categories/personal-care.jpg",
    href: "/products#personal-care",
  },
  {
    id: "pet-products",
    title: "Pet Products",
    description:
      "Grooming tools, toys, feeding accessories, and wellness items.",
    image: "/images/categories/pet-care.jpg",
    href: "/products#pet-products",
  },
  {
    id: "cleaning",
    title: "Cleaning Products",
    description: "Household cleaners, sprays, wipes, and cleaning tools.",
    image: "/images/categories/cleaning.jpg",
    href: "/products#cleaning",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ProductCategoryCards() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our selection of quality essentials for every need
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link
                href={category.href}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="relative p-6 -mt-6">
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
