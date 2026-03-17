import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Send, X } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import "../styles/rendezvous.css";

const RendezVous = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    motif: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ nom: "", prenom: "", telephone: "", email: "", motif: "" });
  };

  const handleReset = () => {
    setFormData({ nom: "", prenom: "", telephone: "", email: "", motif: "" });
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
            <p>Remplissez le formulaire ci-dessous et nous vous recontacterons.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rdv-form"
          >
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="form-group">
              <label htmlFor="nom">Nom *</label>
              <input id="nom" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} required />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="form-group">
              <label htmlFor="prenom">Prénom *</label>
              <input id="prenom" value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} required />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="form-group">
              <label htmlFor="telephone">Numéro de téléphone *</label>
              <input id="telephone" type="tel" value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} required />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="form-group">
              <label htmlFor="email">Email (facultatif)</label>
              <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="form-group">
              <label htmlFor="motif">Motif du rendez-vous (facultatif)</label>
              <textarea id="motif" value={formData.motif} onChange={(e) => setFormData({ ...formData, motif: e.target.value })} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="form-actions">
              <button type="submit" className="btn-submit">
                <Send /> Envoyer
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
