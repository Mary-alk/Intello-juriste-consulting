import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import "../styles/footer.css";

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
      className="footer"
    >
      <div className="footer-inner">
        <div className="footer-contacts">
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
              className="footer-contact"
            >
              <item.icon />
              <span>{item.text}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="footer-divider"
        >
          <p>© 2025 Intello Juriste Consulting. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
