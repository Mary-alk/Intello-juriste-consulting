import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/navbar.css";

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
      className="navbar"
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/logo.png"
              alt="Logo Intello Juriste"
            />
          </motion.div>
        </Link>

        <div className="navbar-links">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
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
