"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react"
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
    icon: Award,
    title: "Quality First",
    description: "We partner only with trusted brands to ensure every product meets the highest standards."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We build lasting relationships through exceptional service."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We constantly expand our catalog and improve our processes to serve you better."
  },
  {
    icon: Shield,
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
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              About Kings Highway Distributors
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
          <div className="max-w-4xl mx-auto">
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
                    Kings Highway Distributors was founded with a simple mission: to provide 
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
              <div className="bg-muted rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">KHD</span>
                  </div>
                  <p className="text-muted-foreground font-medium">Established Excellence</p>
                </div>
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
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most reliable distributor of personal care, pet care, and cleaning 
                    products by delivering consistent quality, competitive pricing, and 
                    exceptional service to every customer we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
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
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
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
