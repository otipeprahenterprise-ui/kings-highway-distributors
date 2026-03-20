"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

const benefits = [
  {
    image: "/images/trust/retail.jpg",
    title: "Competitive Pricing",
    description: "Volume-based discounts that help maximize your margins and stay competitive in the market."
  },
  {
    image: "/images/cards/product_packaging_1773618219482.png",
    title: "Extensive Catalog",
    description: "Access to our full range of personal care, pet care, and cleaning products in bulk quantities."
  },
  {
    image: "/images/cards/logistics_shipping_1773618769738.png",
    title: "Reliable Fulfillment",
    description: "Consistent delivery schedules and dependable inventory management you can count on."
  },
  {
    image: "/images/about/customer-focus.jpg",
    title: "Dedicated Support",
    description: "Personal account management and responsive customer service for all your needs."
  }
]

const requirements = [
  "Valid business license or resale certificate",
  "Minimum order quantities apply",
  "Consistent ordering history preferred",
  "Commitment to maintaining product quality standards"
]

const businessTypes = [
  "Retail Stores",
  "E-commerce Sellers",
  "Grocery Chains",
  "Pet Stores",
  "Convenience Stores",
  "Distributors"
]

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.email,
          company: formData.companyName,
          phone: formData.phone,
          inquiryType: formData.businessType,
          message: formData.message,
          type: 'wholesale',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Failed to send message');
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Wholesale Partnership
            </h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Partner with Kings Highways Distributors for reliable wholesale supply of quality products at competitive prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We make wholesale easy with dedicated support and competitive advantages
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden group p-0">
                  <div className="relative h-48 overflow-hidden w-full">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </div>
                  <CardContent className="p-6 relative -mt-6 bg-background rounded-t-2xl z-10 w-full pt-6">
                    <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-6">
                Requirements
              </h2>
              <p className="text-muted-foreground mb-8">
                To become a wholesale partner, your business should meet the following criteria:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-foreground mb-6">
                We Work With
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border flex items-center gap-3"
                  >
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Your Partnership
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and our wholesale team will be in touch within 1-2 business days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {isSubmitted ? (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We have received your wholesale inquiry. Our team will review your information and contact you within 1-2 business days.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          companyName: "",
                          contactName: "",
                          email: "",
                          phone: "",
                          businessType: "",
                          message: ""
                        })
                      }}
                      variant="outline"
                    >
                      Submit Another Inquiry
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
                            Contact Name *
                          </label>
                          <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            required
                            value={formData.contactName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+1 (516) 859-5438"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                          Business Type *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select your business type</option>
                          {businessTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell us about your business and product interests..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Wholesale Inquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
