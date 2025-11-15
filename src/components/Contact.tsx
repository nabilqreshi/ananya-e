"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Send, Phone, MapPin, Globe } from "lucide-react"
import { toast } from "sonner"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const steamY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    machineType: "",
    businessSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thank you! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      machineType: "",
      businessSize: "",
      message: "",
    })
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden gradient-coffee">
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              delay: i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
              y: steamY,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--cream))] mb-6">Get in Touch</h2>
          <p className="text-xl text-[hsl(var(--cream))]/80 max-w-2xl mx-auto">
            Ready to elevate your corporate coffee experience? Contact Ananya Enterprises today.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-coffee"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Full Name *</label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/50 focus:border-[hsl(var(--gold))] transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Email Address *</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/50 focus:border-[hsl(var(--gold))] transition-smooth"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 (942) 368-7390"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/50 focus:border-[hsl(var(--gold))] transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Machine Type</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, machineType: value })}>
                    <SelectTrigger className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] focus:border-[hsl(var(--gold))] transition-smooth">
                      <SelectValue placeholder="Select machine type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--espresso))] border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))]">
                      <SelectItem value="espresso">Espresso Maker</SelectItem>
                      <SelectItem value="bean-to-cup">Bean-to-Cup</SelectItem>
                      <SelectItem value="industrial">Industrial Brewer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Business Size</label>
                <Select onValueChange={(value) => setFormData({ ...formData, businessSize: value })}>
                  <SelectTrigger className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] focus:border-[hsl(var(--gold))] transition-smooth">
                    <SelectValue placeholder="Select business size" />
                  </SelectTrigger>
                  <SelectContent className="bg-[hsl(var(--espresso))] border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))]">
                    <SelectItem value="small">Small (1-10 employees)</SelectItem>
                    <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                    <SelectItem value="large">Large (51-200 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-[hsl(var(--cream))] mb-2 font-medium">Message *</label>
                <Textarea
                  required
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-[hsl(var(--bronze))]/30 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/50 focus:border-[hsl(var(--gold))] transition-smooth min-h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bronze text-white hover:shadow-glow transition-smooth text-lg font-semibold group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-coffee flex flex-col justify-between h-fit"
          >
            <div>
              <h3 className="font-display text-2xl text-[hsl(var(--gold))] mb-8">Contact Preeti</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[hsl(var(--cream))]/60 text-sm mb-1">Location</p>
                    <p className="text-[hsl(var(--cream))] font-medium">Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[hsl(var(--cream))]/60 text-sm mb-1">Phone Numbers</p>
                    <a
                      href="tel:+919423687390"
                      className="text-[hsl(var(--cream))] font-medium hover:text-[hsl(var(--gold))] transition block"
                    >
                      +91 94236 87390
                    </a>
                    <a
                      href="tel:+918999321193"
                      className="text-[hsl(var(--cream))] font-medium hover:text-[hsl(var(--gold))] transition block"
                    >
                      +91 89993 21193
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[hsl(var(--cream))]/60 text-sm mb-1">Email</p>
                    <a
                      href="mailto:Ananya.ccd@gmail.com"
                      className="text-[hsl(var(--cream))] font-medium hover:text-[hsl(var(--gold))] transition block text-sm"
                    >
                      Ananya.ccd@gmail.com
                    </a>
                    <a
                      href="mailto:abuadvisoryspl@gmail.com"
                      className="text-[hsl(var(--cream))] font-medium hover:text-[hsl(var(--gold))] transition block text-sm"
                    >
                      abuadvisoryspl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[hsl(var(--cream))]/60 text-sm mb-1">Google Maps</p>
                    <a
                      href="https://maps.google.com/?q=21.133903503418,79.0620269775391"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--cream))] font-medium hover:text-[hsl(var(--gold))] transition block"
                    >
                      View Location
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[hsl(var(--bronze))]/30 space-y-3">
              <a
                href="https://wa.me/919423687390"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-smooth"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <p className="text-[hsl(var(--cream))]/50 text-xs text-center">
                Direct contact with Preeti Abhay Upadhye
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
