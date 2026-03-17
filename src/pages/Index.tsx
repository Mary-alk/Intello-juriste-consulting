import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Calendar, Scale, FileText, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import "../styles/index-page.css";

const Index = () => {
  const services = [
    { icon: Scale, title: "Droit foncier", desc: "Accompagnement dans vos transactions immobilières" },
    { icon: FileText, title: "Gestion de patrimoine", desc: "Protection et optimisation de vos biens" },
    { icon: Briefcase, title: "Droit des affaires", desc: "Conseil juridique pour entrepreneurs" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-bg"
        >
          <Scale />
        </motion.div>

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Notre cabinet vous accompagne avec rigueur et professionnalisme dans toutes vos démarches juridiques.
            Nous sommes spécialisés en droit foncier, en gestion de patrimoine et en droit des affaires.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="service-card"
            >
              <motion.div whileHover={{ rotate: 10 }} className="service-icon">
                <service.icon />
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="security-inner">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "contents" }}
          >
            <motion.div whileHover={{ scale: 1.1 }} className="security-icon">
              <Shield />
            </motion.div>

            <div>
              <h2>Votre sécurité juridique, notre priorité</h2>
              <p>
                Nous mettons un point d'honneur à garantir votre sécurité à chaque étape de votre projet.
                Faire appel à notre cabinet, c'est choisir la tranquillité d'esprit.
                Nous vous aidons à anticiper les risques juridiques et à prendre des décisions éclairées,
                grâce à un accompagnement sur mesure conçu pour sécuriser vos démarches et optimiser vos résultats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="cta-card"
          >
            <BookOpen />
            <h3>Enrichissez-vous sur les notions de droits</h3>
            <p>Découvrez nos E-books pour mieux comprendre vos droits.</p>
            <Link to="/ebooks" className="btn-primary">Voir nos E-books</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="cta-card"
          >
            <Calendar />
            <h3>Prenez rendez-vous avec nous</h3>
            <p>N'hésitez pas à nous contacter pour une consultation.</p>
            <Link to="/rendez-vous" className="btn-primary">Prendre rendez-vous</Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
