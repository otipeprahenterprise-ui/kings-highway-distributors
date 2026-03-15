"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const audiences = [
  {
    image: "/images/trust/amazon.jpg",
    label: "Amazon Customers",
  },
  {
    image: "/images/trust/retail.jpg",
    label: "Retail Partners",
  },
  {
    image: "/images/trust/business.jpg",
    label: "Small Businesses",
  },
  {
    image: "/images/trust/pet-owners.jpg",
    label: "Pet Owners",
  },
  {
    image: "/images/trust/household.jpg",
    label: "Households",
  },
]

export function TrustSection() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground sm:text-3xl">
            Proudly Serving
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-square max-w-[160px] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={audience.image}
                  alt={audience.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center p-3">
                  <span className="text-sm font-medium text-white text-center">
                    {audience.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
