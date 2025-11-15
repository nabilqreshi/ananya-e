import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Wrench, MapPin, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Express shipping to get your machines operational quickly",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    description: "Expert installation and maintenance support",
  },
  {
    icon: MapPin,
    title: "Nationwide Service",
    description: "Coverage across all major cities and regions",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Special pricing for large-scale deployments",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[hsl(var(--cream))] to-white relative overflow-hidden">
      {/* Parallax Coffee Bean Shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-[hsl(var(--bronze))]/10 rounded-full blur-2xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-48 h-48 bg-[hsl(var(--espresso))]/5 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-[hsl(var(--espresso))] mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-[hsl(var(--espresso))]/70 max-w-3xl mx-auto">
            We go beyond distribution to ensure your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-glow transition-smooth text-center hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bronze flex items-center justify-center group-hover:animate-float">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-[hsl(var(--espresso))] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[hsl(var(--espresso))]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
