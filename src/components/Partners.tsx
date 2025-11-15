"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import coffeeBeansBg from "@/assets/coffee-beans-bg.jpg"

import cafeCoffeeDayLogo from "@/assets/logos/cafe-coffee.png"
import tataCosumersLogo from "@/assets/logos/Tata.webp"
import hindustandUnileverLogo from "@/assets/logos/Hindustan Unilever.jpeg"
import freshnHonestLogo from "@/assets/logos/fresh.png"
import pasioLogo from "@/assets/logos/pasio-logo..png"
import pudumjiLogo from "@/assets/logos/pudumji-paper-products.jpeg"
import rbiLogo from "@/assets/logos/rbi.jpeg"
import indusindLogo from "@/assets/logos/indusind-bank.png"
import hdfcLogo from "@/assets/logos/hdfc-bank.png"
import dinshawsLogo from "@/assets/logos/dinshaws.png"
import nciLogo from "@/assets/logos/national-cancer-institute..png"
import radissonLogo from "@/assets/logos/radisson-blue..png"
import gmmcoLogo from "@/assets/logos/gmmco-india..png"
import artodayaLogo from "@/assets/logos/artodaya-kia.png"
import barbateLogo from "@/assets/logos/barbate-group..webp"
import tuliLogo from "@/assets/logos/hotel-tuli..png"
import airportCenterLogo from "@/assets/logos/airport-center-logo..jpeg"
import adityaBirlaLogo from "@/assets/logos/aditya-birla..png"
import asianPaintsLogo from "@/assets/logos/asian-paints-logo..png"
import cromptonLogo from "@/assets/logos/crompton-greaves..jpeg"
import gifLogo from "@/assets/logos/gif-logo..png"
import tataAdvancedLogo from "@/assets/logos/tata-advanced.png.webp"
import globalLogicLogo from "@/assets/logos/global-logic..png"
import pragmaticLogo from "@/assets/logos/pragmatic-india..jpeg"

const brands = [
  { name: "Cafe Coffee Day", logo: cafeCoffeeDayLogo },
  { name: "Tata Consumers", logo: tataCosumersLogo },
  { name: "Hindustan Unilever", logo: hindustandUnileverLogo },
  { name: "Freshn Honest", logo: freshnHonestLogo },
  { name: "Pasio (Sinarmass)", logo: pasioLogo },
  { name: "Pudumji Paper Products", logo: pudumjiLogo },
]

const eliteClients = [
  { name: "RBI - Reserve Bank of India", logo: rbiLogo },
  { name: "IndusInd Bank", logo: indusindLogo },
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "Dinshaws", logo: dinshawsLogo },
  { name: "National Cancer Institute", logo: nciLogo },
  { name: "Radisson Blue", logo: radissonLogo },
  { name: "GMMCO India", logo: gmmcoLogo },
  { name: "Artodaya KIA", logo: artodayaLogo },
  { name: "Barbate Group", logo: barbateLogo },
  { name: "Hotel Tuli", logo: tuliLogo },
  { name: "Airport Center Point", logo: airportCenterLogo },
  { name: "Aditya Birla", logo: adityaBirlaLogo },
  { name: "Asian Paints", logo: asianPaintsLogo },
  { name: "Crompton Greaves", logo: cromptonLogo },
  { name: "GIF Technology", logo: gifLogo },
  { name: "Tata Advanced", logo: tataAdvancedLogo },
  { name: "Global Logic", logo: globalLogicLogo },
  { name: "Pragmatic India", logo: pragmaticLogo },
]

const Partners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

  return (
    <section ref={ref} className="py-20 bg-[hsl(var(--espresso))] relative overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: backgroundY, opacity }}>
        <img src={coffeeBeansBg || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--espresso))]/80 via-transparent to-[hsl(var(--espresso))]/80" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-[hsl(var(--gold))] mb-4">
            Our Premium Partners & Elite Clients
          </h2>
          <p className="text-[hsl(var(--cream))]/70 text-lg">
            Trusted by India's leading brands and top corporate organizations across banking, IT, and hospitality
            sectors
          </p>
        </motion.div>

        {/* Brand Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-[hsl(var(--cream))]/60 text-center mb-8 font-medium">OUR BRAND PARTNERSHIPS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-[hsl(var(--bronze))]/30 hover:border-[hsl(var(--gold))]/50 hover:bg-white/10 transition-smooth p-6 text-center flex flex-col items-center justify-center gap-3 h-40"
              >
                <div className="w-16 h-16 relative">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                <span className="font-medium text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))] transition-smooth text-sm">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elite Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-[hsl(var(--cream))]/60 text-center mb-8 font-medium">
            TRUSTED BY INDIA'S ELITE ORGANIZATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eliteClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-r from-[hsl(var(--bronze))]/10 to-[hsl(var(--gold))]/10 backdrop-blur-sm rounded-lg border border-[hsl(var(--bronze))]/20 hover:border-[hsl(var(--gold))]/50 transition-smooth p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>
                <span className="text-[hsl(var(--cream))]/90 font-medium group-hover:text-[hsl(var(--gold))] transition-smooth text-sm">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
