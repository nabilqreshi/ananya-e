import { Coffee, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[hsl(var(--espresso))] text-[hsl(var(--cream))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[hsl(var(--gold))]" />
              <span className="font-display text-2xl text-[hsl(var(--gold))]">Ananya Enterprises</span>
            </div>
            <p className="text-[hsl(var(--cream))]/70 leading-relaxed">
              Premium coffee solutions for corporate workspaces. Your trusted partner for quality and excellence since
              established.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-[hsl(var(--gold))] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Our Machines", "Partners", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[hsl(var(--cream))]/70 hover:text-[hsl(var(--gold))] transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg text-[hsl(var(--gold))] mb-4">Services</h3>
            <ul className="space-y-2">
              {["Machine Sales", "Installation", "Maintenance", "Bulk Orders"].map((service) => (
                <li key={service}>
                  <a
                    href="#contact"
                    className="text-[hsl(var(--cream))]/70 hover:text-[hsl(var(--gold))] transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-lg text-[hsl(var(--gold))] mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[hsl(var(--bronze))]/20 flex items-center justify-center hover:bg-[hsl(var(--bronze))] hover:shadow-glow transition-smooth group"
                >
                  <Icon className="w-5 h-5 text-[hsl(var(--cream))] group-hover:text-white transition-smooth" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--bronze))]/30 text-center text-[hsl(var(--cream))]/60">
          <p>
            © {currentYear} Ananya Enterprises. All rights reserved. | Channel Partner for Premium Coffee & Consumer
            Products
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
