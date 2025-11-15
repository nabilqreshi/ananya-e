"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Globe, TrendingUp, BookOpen, Music, Camera } from "lucide-react"

const milestones = [
  { year: "Channel Partner", title: "Cafe Coffee Day", description: "Premium coffee solutions" },
  { year: "Partner", title: "Tata Consumers", description: "Quality beverages" },
  { year: "Distributor", title: "Hindustan Unilever", description: "Leading brands" },
  { year: "Certified", title: "CA Inter - Tender Master", description: "Professional Excellence" },
]

const stats = [
  { icon: Award, value: "CA Inter", label: "Certified Professional" },
  { icon: Users, value: "50+", label: "Corporate Elite Clients" },
  { icon: Globe, value: "Nagpur", label: "India-Based Operations" },
  { icon: TrendingUp, value: "Growing", label: "Market Expansion" },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={ref} className="py-24 bg-[hsl(var(--cream))] relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--bronze))]/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--gold))]/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--espresso))] mb-6">
            About Preeti Abhay Upadhye
          </h2>
          <p className="text-xl text-[hsl(var(--espresso))]/70 max-w-3xl mx-auto leading-relaxed">
            To become the leading provider of exceptional coffee experiences, fostering a culture of excellence,
            customer satisfaction, and industry recognition.
          </p>
        </motion.div>

        {/* Business Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-coffee"
        >
          <h3 className="font-display text-2xl text-[hsl(var(--espresso))] mb-6">Our Mission</h3>
          <p className="text-lg text-[hsl(var(--espresso))]/80 leading-relaxed mb-4">
            Our mission is to deliver high-quality coffee machines and freshly roasted coffee beans while fostering a
            culture of excellence, customer satisfaction, and making premium coffee accessible in every corporate
            workspace. We energize corporate environments with the rich aroma and taste of freshly brewed coffee, making
            it an integral part of their every workday.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-display text-lg text-[hsl(var(--bronze))] mb-3">Core Competencies</h4>
              <ul className="space-y-2 text-[hsl(var(--espresso))]/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Product Knowledge & Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Strategic Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Market Expansion
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg text-[hsl(var(--bronze))] mb-3">Brand Partners</h4>
              <ul className="space-y-2 text-[hsl(var(--espresso))]/70 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Cafe Coffee Day
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Tata Consumers Products Limited
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full"></span>
                  Hindustan Unilever Limited
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--bronze))]/30 via-[hsl(var(--bronze))] to-[hsl(var(--bronze))]/30" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full gradient-bronze flex items-center justify-center shadow-coffee mb-4 relative z-10">
                    <span className="text-white font-bold text-xs text-center px-1">{milestone.year}</span>
                  </div>
                  <h3 className="font-display text-xl text-[hsl(var(--espresso))] mb-2">{milestone.title}</h3>
                  <p className="text-[hsl(var(--espresso))]/60 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-coffee hover:shadow-glow transition-smooth text-center group hover:scale-105"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-[hsl(var(--bronze))] group-hover:text-[hsl(var(--gold))] transition-smooth" />
                <div className="font-display text-4xl text-[hsl(var(--espresso))] mb-2">{stat.value}</div>
                <div className="text-[hsl(var(--espresso))]/60 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-4xl mx-auto mt-20 bg-[hsl(var(--bronze))]/5 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="font-display text-2xl text-[hsl(var(--espresso))] mb-6">Meet the Founder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[hsl(var(--espresso))]/80 leading-relaxed mb-4">
                Preeti Abhay Upadhye is a CA Inter certified professional and Tender Master with a strategic mindset
                dedicated to transforming the corporate coffee experience across India. With expertise in product
                knowledge and strategic planning, she has built a thriving business empire serving India's elite
                corporate sector.
              </p>
              <div className="space-y-2 text-sm text-[hsl(var(--espresso))]/70">
                <p>
                  <strong>Location:</strong> Nagpur, Maharashtra, India
                </p>
                <p>
                  <strong>Specialization:</strong> Premium Coffee Solutions & Strategic Market Expansion
                </p>
                <p>
                  <strong>Goals:</strong> Build Brand Presence & Expand Market Reach across India
                </p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h4 className="font-display text-lg text-[hsl(var(--bronze))] mb-4">Personal Interests & Hobbies</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[hsl(var(--espresso))]/70">
                    <Camera className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Wildlife Photography
                  </li>
                  <li className="flex items-center gap-3 text-[hsl(var(--espresso))]/70">
                    <BookOpen className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Reading
                  </li>
                  <li className="flex items-center gap-3 text-[hsl(var(--espresso))]/70">
                    <Music className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Music Enthusiast
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg text-[hsl(var(--bronze))] mb-4">Family & Beyond</h4>
                <p className="text-[hsl(var(--espresso))]/70 text-sm leading-relaxed">
                  Supported by her family - Husband CA Abhay Upadhye, and siblings Advocate Ananya & Anshuman Upadhye.
                  Passionate fitness enthusiast and Akashic Record Reader, bringing holistic wellness to her business
                  approach.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
