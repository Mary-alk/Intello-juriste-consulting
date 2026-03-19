import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import "../styles/confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const rdvData = location.state as { motif?: string; date?: string; heure?: string } | null;

  return (
    <Layout>
      <section className="confirmation-section">
        <div className="confirmation-container">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="confirmation-icon"
          >
            <CheckCircle />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Rendez-vous confirmé !
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Votre demande de rendez-vous a bien été enregistrée. Nous vous recontacterons dans les plus brefs délais pour confirmer le créneau.
          </motion.p>

          {rdvData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="confirmation-details"
            >
              <h3>Récapitulatif</h3>
              {rdvData.date && (
                <div className="confirmation-detail-row">
                  <span>Date</span>
                  <span>{rdvData.date}</span>
                </div>
              )}
              {rdvData.heure && (
                <div className="confirmation-detail-row">
                  <span>Heure</span>
                  <span>{rdvData.heure}</span>
                </div>
              )}
              {rdvData.motif && (
                <div className="confirmation-detail-row">
                  <span>Motif</span>
                  <span>{rdvData.motif}</span>
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="confirmation-actions"
          >
            <Link to="/" className="btn-primary">Retour à l'accueil</Link>
            <Link to="/rendez-vous" className="btn-secondary">Nouveau rendez-vous</Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Confirmation;
