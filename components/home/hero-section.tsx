"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-foreground/95 py-20 sm:py-28 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Trusted B2B Distributor
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
              Reliable Everyday Essentials for Homes and Businesses
            </h1>
            <p className="mt-6 text-pretty text-lg text-background/70 sm:text-xl">
              Kings Highway Distributors supplies trusted personal care, pet
              care, and cleaning products with consistent fulfillment and
              dependable quality.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background sm:w-auto"
              >
                <Link href="/wholesale">Become a Partner</Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="group relative h-48 overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image src="/images/cards/personal_care_1773618740551.png" alt="Personal Care" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-semibold text-foreground">Personal Care</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Soaps, grooming & hygiene</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="group relative h-48 overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image src="/images/cards/household_cleaning_1773618642238.png" alt="Cleaning Products" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-semibold text-foreground">Cleaning Products</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Cleaners, wipes & sprays</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="group relative h-48 overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image src="/images/cards/pet_care_1773618754342.png" alt="Pet Products" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-semibold text-foreground">Pet Products</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Grooming, toys & wellness</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="group relative h-48 overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image src="/images/cards/warehouse_distribution_1773618180801.png" alt="Warehouse Distribution" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-3xl font-bold text-primary-foreground">1000+</p>
                    <p className="mt-1 text-sm text-primary-foreground/90">Products Distributed</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
