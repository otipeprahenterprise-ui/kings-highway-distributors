"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const values = [
  {
    image: "/images/about/quality.jpg",
    title: "Quality First",
    description: "We partner only with trusted brands to ensure every product meets the highest standards."
  },
  {
    image: "/images/about/customer-focus.jpg",
    title: "Customer Focus",
    description: "Your success is our priority. We build lasting relationships through exceptional service."
  },
  {
    image: "/images/about/growth.jpg",
    title: "Continuous Growth",
    description: "We constantly expand our catalog and improve our processes to serve you better."
  },
  {
    image: "/images/about/reliability.jpg",
    title: "Reliability",
    description: "Consistent quality and dependable fulfillment you can count on, every single time."
  }
]

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Products Available" },
  { value: "1000+", label: "Happy Customers" },
  { value: "99%", label: "On-Time Delivery" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/warehouse.jpg"
            alt="Distribution warehouse"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              About Kings Highways Distributors
            </h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Your trusted partner for quality personal care, pet care, and cleaning products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Kings Highways Distributors was founded with a simple mission: to provide 
                    households, retailers, and businesses with reliable access to quality 
                    everyday essentials.
                  </p>
                  <p>
                    What started as a small operation has grown into a trusted distribution 
                    partner serving customers across multiple channels, including Amazon and 
                    wholesale networks.
                  </p>
                  <p>
                    Today, we continue to expand our product offerings while maintaining the 
                    same commitment to quality and service that has been our foundation from 
                    day one.
                  </p>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/warehouse.jpg"
                  alt="Our distribution center"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/features/sourcing.jpg"
                    alt="Our mission"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-primary-foreground">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most reliable distributor of personal care, pet care, and cleaning 
                    products by delivering consistent quality, competitive pricing, and 
                    exceptional service to every customer we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/features/inventory.jpg"
                    alt="Our vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-secondary-foreground">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading distribution partner for essential household products, 
                    recognized for our unwavering commitment to quality, innovation, and 
                    customer satisfaction across all markets we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  </div>
                  <CardContent className="p-6 text-center -mt-4 relative">
                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you are a retailer looking for wholesale opportunities or a consumer 
              seeking quality products, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground font-semibold rounded-lg border border-border hover:bg-muted transition-colors"
              >
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
