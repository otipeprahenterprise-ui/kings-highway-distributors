"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@kingshighwaydistributors.com",
    subtext: "We respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "(555) 123-4567",
    subtext: "Mon-Fri, 9am-5pm EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Distribution Way",
    subtext: "Brooklyn, NY 11223"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 5:00 PM EST"
  }
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1F2937] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-bold mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about our products or wholesale opportunities? 
              We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-[#2563EB]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground font-medium">{item.details}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.subtext}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-[#10B981]" />
                      </div>
                      <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll respond within 24 business hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({
                            name: "",
                            email: "",
                            company: "",
                            phone: "",
                            inquiryType: "",
                            message: ""
                          })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name <span className="text-[#2563EB]">*</span>
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address <span className="text-[#2563EB]">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-foreground">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formState.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">
                          Inquiry Type <span className="text-[#2563EB]">*</span>
                        </label>
                        <Select
                          value={formState.inquiryType}
                          onValueChange={(value) => handleChange("inquiryType", value)}
                          required
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                            <SelectItem value="product">Product Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message <span className="text-[#2563EB]">*</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          value={formState.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={5}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-foreground mb-4">
                  Why Partner With Us?
                </h2>
                <div className="space-y-4">
                  {[
                    "Competitive wholesale pricing for qualified retailers",
                    "Flexible minimum order quantities",
                    "Dedicated account management support",
                    "Fast and reliable fulfillment nationwide",
                    "Access to exclusive product lines"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-[#2563EB] border-0">
                <CardContent className="p-8 text-white">
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-4">
                    Looking for Wholesale?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    If you&apos;re a retailer interested in carrying our products, 
                    we&apos;d love to discuss partnership opportunities. Visit our 
                    wholesale page for more information.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-[#2563EB] hover:bg-gray-100"
                  >
                    <a href="/wholesale">Learn About Wholesale</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        What are your minimum order quantities?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        MOQs vary by product category. Contact us for specific details.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Do you ship internationally?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We currently ship within the United States. International shipping available upon request.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        How quickly do you respond to inquiries?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We aim to respond to all inquiries within 24 business hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
