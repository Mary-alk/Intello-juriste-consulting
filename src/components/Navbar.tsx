import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/ebooks", label: "E-books" },
    { path: "/rendez-vous", label: "Prendre rendez-vous" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/logo.png" 
              alt="Logo Intello Juriste" 
              className="h-10 w-auto"
            />
          </motion.div>
        </Link>

        <div className="flex gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium
                  ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-accent hover:border-accent-foreground/20 text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
