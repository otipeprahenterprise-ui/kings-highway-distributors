"use client"

import { motion } from "framer-motion"
import { Store, Building2, Briefcase, Heart, Home } from "lucide-react"

const audiences = [
  {
    icon: Store,
    label: "Amazon Customers",
  },
  {
    icon: Building2,
    label: "Retail Partners",
  },
  {
    icon: Briefcase,
    label: "Small Businesses",
  },
  {
    icon: Heart,
    label: "Pet Owners",
  },
  {
    icon: Home,
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
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Proudly Serving
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-md">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {audience.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
