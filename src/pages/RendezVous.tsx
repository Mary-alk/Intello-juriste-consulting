import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import "../styles/rendezvous.css";

const RendezVous = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    motif: "",
    date: "",
    heure: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  };

  const handleReset = () => {
    setFormData({ motif: "", date: "", heure: "" });
  };

  return (
    <Layout>
      <section className="rdv-section">
        <div className="rdv-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rdv-header"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="rdv-header-icon"
            >
              <Calendar />
            </motion.div>
            <h1>Prendre rendez-vous</h1>
            <p>Choisissez un créneau et décrivez le motif de votre consultation.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rdv-form"
          >
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="form-group">
              <label htmlFor="date">Date du rendez-vous *</label>
              <input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="form-group">
              <label htmlFor="heure">Heure *</label>
              <input id="heure" type="time" value={formData.heure} onChange={(e) => setFormData({ ...formData, heure: e.target.value })} required />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="form-group">
              <label htmlFor="motif">Motif du rendez-vous *</label>
              <textarea id="motif" value={formData.motif} onChange={(e) => setFormData({ ...formData, motif: e.target.value })} placeholder="Décrivez brièvement le motif de votre consultation..." required />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="form-actions">
              <button type="submit" className="btn-submit">
                <Send /> Confirmer
              </button>
              <button type="button" className="btn-cancel" onClick={handleReset}>
                <X /> Annuler
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default RendezVous;
