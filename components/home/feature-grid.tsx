"use client"

import { motion } from "framer-motion"
import { Search, Zap, Database, Users } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Reliable Product Sourcing",
    description:
      "We carefully select products that meet high standards of quality and safety for every customer.",
  },
  {
    icon: Zap,
    title: "Fast Fulfillment",
    description:
      "Quick and accurate order processing ensures your products arrive when you need them.",
  },
  {
    icon: Database,
    title: "Consistent Inventory",
    description:
      "Dependable stock levels mean you can count on us for continuous supply.",
  },
  {
    icon: Users,
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Kings Highway Distributors?
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
              className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <feature.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
