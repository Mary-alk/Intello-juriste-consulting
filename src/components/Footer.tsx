import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const contactItems = [
    { icon: Phone, text: "+228 96 33 57 71", href: "tel:+22896335771" },
    { icon: Mail, text: "intellojuriste@gmail.com", href: "mailto:intellojuriste@gmail.com" },
    { icon: MapPin, text: "Agoè Daliko", href: "#" },
    { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-background mt-auto"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-8 justify-center md:justify-between">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Linkedin ? "_blank" : undefined}
              rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{item.text}</span>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-background/20 text-center"
        >
          <p className="text-sm text-background/60">
            © 2025 Intello Juriste Consulting. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
