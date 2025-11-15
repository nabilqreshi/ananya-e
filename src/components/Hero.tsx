"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import heroImage from "@/assets/hero-coffee.jpg"
import { useRef } from "react"

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image with Overlay */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.img
          src={heroImage}
          alt="Premium coffee machine brewing espresso"
          className="w-full h-[120%] object-cover"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--espresso))]/80 via-[hsl(var(--espresso))]/85 to-[hsl(var(--espresso))]/95" />
      </motion.div>

      {/* Animated Coffee Steam Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/5 rounded-full blur-3xl"
            initial={{ opacity: 0, y: 0, x: `${i * 20}%` }}
            animate={{
              opacity: [0.3, 0.6, 0],
              y: [-40, -80, -120],
              scale: [1, 1.2, 1.5],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
            style={{ bottom: "10%", left: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-[hsl(var(--bronze))]/20 border border-[hsl(var(--bronze))]/40 rounded-full backdrop-blur-sm"
          >
            <span className="text-[hsl(var(--gold))] font-medium text-sm tracking-wider">
              PREMIUM COFFEE FOR CORPORATE INDIA
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-[hsl(var(--cream))] leading-tight">
            Energize Your
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--bronze))] bg-clip-text text-transparent">
              Corporate Workspace ☕
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[hsl(var(--cream))]/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted channel partner bringing premium coffee solutions to India's leading corporate offices, banks,
            hotels, and institutions. Fresh-brewed excellence, every workday.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("machines")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="gradient-bronze text-white hover:shadow-glow transition-smooth group px-8 py-6 text-lg font-semibold"
            >
              Explore Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="border-2 border-[hsl(var(--bronze))] bg-transparent text-[hsl(var(--cream))] hover:bg-[hsl(var(--bronze))]/20 backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-smooth"
            >
              Contact Preeti
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-[hsl(var(--bronze))] rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
