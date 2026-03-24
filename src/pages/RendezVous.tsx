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
  const [dateError, setDateError] = useState("");
  const [heureError, setHeureError] = useState("");

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const validateDateTime = (date: string, heure: string) => {
    if (!date) return true;
    const dayOfWeek = new Date(date + "T00:00:00").getDay(); // 0=Sun, 6=Sat

    if (dayOfWeek === 0) {
      setDateError("Le cabinet est fermé le dimanche.");
      return false;
    }
    setDateError("");

    if (!heure) return true;
    const [h, m] = heure.split(":").map(Number);
    const minutes = h * 60 + m;

    if (dayOfWeek === 6) {
      // Samedi : 8h-12h30
      if (minutes < 480 || minutes > 750) {
        setHeureError("Samedi : créneaux disponibles de 8h à 12h30.");
        return false;
      }
    } else {
      // Lundi-Vendredi : 8h-12h et 14h-17h
      if (minutes < 480 || minutes > 1020 || (minutes >= 720 && minutes < 840)) {
        setHeureError("Lun-Ven : créneaux de 8h à 12h et 14h à 17h.");
        return false;
      }
    }
    setHeureError("");
    return true;
  };

  const handleDateChange = (date: string) => {
    setFormData({ ...formData, date });
    validateDateTime(date, formData.heure);
  };

  const handleHeureChange = (heure: string) => {
    setFormData({ ...formData, heure });
    validateDateTime(formData.date, heure);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDateTime(formData.date, formData.heure)) return;
    navigate("/confirmation", { state: formData });
  };

  const handleReset = () => {
    setFormData({ motif: "", date: "", heure: "" });
    setDateError("");
    setHeureError("");
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
            <h1>Prendre rendez-vous avec Maître ALAKA</h1>
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
