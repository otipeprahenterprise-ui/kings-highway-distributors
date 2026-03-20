"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const features = [
  {
    image: "/images/features/sourcing.jpg",
    title: "Reliable Product Sourcing",
    description:
      "We carefully select products that meet high standards of quality and safety for every customer.",
  },
  {
    image: "/images/features/fulfillment.jpg",
    title: "Fast Fulfillment",
    description:
      "Quick and accurate order processing ensures your products arrive when you need them.",
  },
  {
    image: "/images/features/inventory.jpg",
    title: "Consistent Inventory",
    description:
      "Dependable stock levels mean you can count on us for continuous supply.",
  },
  {
    image: "/images/features/customers.jpg",
    title: "Trusted by Retailers & Households",
    description:
      "From small businesses to family homes, our customers trust us for everyday essentials.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeatureGrid() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Kings Highways Distributors?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We deliver quality and reliability in every order
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="relative p-6 -mt-8">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
