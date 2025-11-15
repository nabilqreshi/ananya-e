"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Machines", href: "#machines" },
  { name: "Partners", href: "#partners" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1)
    const element = document.getElementById(sectionId)

    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--espresso))]/95 backdrop-blur-lg border-b border-[hsl(var(--bronze))]/20 shadow-coffee"
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Coffee className="w-8 h-8 text-[hsl(var(--gold))] group-hover:rotate-12 transition-transform" />
              <span className="font-display text-2xl text-[hsl(var(--gold))]">Ananya Enterprises</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                    activeSection === item.href.substring(1)
                      ? "text-[hsl(var(--gold))] bg-[hsl(var(--bronze))]/20"
                      : "text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))]/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="gradient-bronze text-white hover:shadow-glow transition-smooth"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))] transition-smooth"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-[hsl(var(--espresso))]/98 backdrop-blur-lg border-b border-[hsl(var(--bronze))]/20 shadow-coffee overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-3 rounded-lg font-medium text-left transition-smooth ${
                      activeSection === item.href.substring(1)
                        ? "text-[hsl(var(--gold))] bg-[hsl(var(--bronze))]/20"
                        : "text-[hsl(var(--cream))] hover:text-[hsl(var(--gold))] hover:bg-[hsl(var(--bronze))]/10"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4"
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full gradient-bronze text-white hover:shadow-glow transition-smooth"
                  >
                    Get a Quote
                  </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
