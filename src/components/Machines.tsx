import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Award, Droplets } from "lucide-react";
import espressoMachine from "@/assets/machine-espresso.jpg";
import beanToCup from "@/assets/machine-bean-to-cup.jpg";
import industrial from "@/assets/machine-industrial.jpg";

const machines = [
  {
    id: 1,
    name: "Premium Espresso Makers",
    description: "Professional-grade espresso machines for cafés and restaurants. Precision engineering meets Italian craftsmanship.",
    image: espressoMachine,
    features: ["15-19 Bar Pressure", "Dual Boiler System", "PID Temperature Control"],
    icon: Zap,
  },
  {
    id: 2,
    name: "Bean-to-Cup Machines",
    description: "Automated perfection from bean to cup. One-touch operation with customizable brewing profiles.",
    image: beanToCup,
    features: ["Built-in Grinder", "Touch Screen Display", "Multiple Drink Options"],
    icon: Award,
  },
  {
    id: 3,
    name: "Industrial Brewers",
    description: "High-capacity systems for hotels, offices, and large venues. Built for volume without compromising quality.",
    image: industrial,
    features: ["High Volume Output", "Commercial Grade", "Easy Maintenance"],
    icon: Droplets,
  },
];

const Machines = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-24 gradient-coffee relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-[hsl(var(--gold))]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-[hsl(var(--bronze))]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[hsl(var(--cream))]/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--cream))] mb-6">
            Our Machines
          </h2>
          <p className="text-xl text-[hsl(var(--cream))]/80 max-w-3xl mx-auto">
            Curated selection of the world's finest coffee brewing equipment
          </p>
        </motion.div>

        {/* Machines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-coffee hover:shadow-glow transition-smooth">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-[hsl(var(--cream))]">
                    <motion.img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[hsl(var(--bronze))] flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-[hsl(var(--cream))] mb-3">
                      {machine.name}
                    </h3>
                    <p className="text-[hsl(var(--cream))]/70 mb-4 leading-relaxed">
                      {machine.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {machine.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-[hsl(var(--cream))]/80 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full bg-[hsl(var(--bronze))] hover:bg-[hsl(var(--gold))] text-white group-hover:shadow-glow transition-smooth"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Machines;
