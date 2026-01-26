import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Calendar, Scale, FileText, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const services = [
    { icon: Scale, title: "Droit foncier", desc: "Accompagnement dans vos transactions immobilières" },
    { icon: FileText, title: "Gestion de patrimoine", desc: "Protection et optimisation de vos biens" },
    { icon: Briefcase, title: "Droit des affaires", desc: "Conseil juridique pour entrepreneurs" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <Scale className="w-96 h-96 text-primary" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Nos services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Notre cabinet vous accompagne avec rigueur et professionnalisme dans toutes vos démarches juridiques.
            Nous sommes spécialisés en droit foncier, en gestion de patrimoine et en droit des affaires.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-card p-8 rounded-xl border border-border transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="hidden md:flex w-20 h-20 bg-primary/10 rounded-2xl items-center justify-center flex-shrink-0"
            >
              <Shield className="w-10 h-10 text-primary" />
            </motion.div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Votre sécurité juridique, notre priorité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Enrichissez-vous sur les notions de droits
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez nos E-books pour mieux comprendre vos droits.
              </p>
              <Link
                to="/ebooks"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Voir nos E-books
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Prenez rendez-vous avec nous
              </h3>
              <p className="text-muted-foreground mb-6">
                N'hésitez pas à nous contacter pour une consultation.
              </p>
              <Link
                to="/rendez-vous"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
