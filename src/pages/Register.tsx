import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import "../styles/auth.css";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({ title: "Erreur", description: "Les mots de passe ne correspondent pas." });
      return;
    }
    // TODO: connecter au backend
    toast({ title: "Inscription réussie !", description: "Vous pouvez maintenant vous connecter." });
    navigate("/login");
  };

  return (
    <Layout>
      <section className="auth-section">
        <div className="auth-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="auth-header"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="auth-header-icon"
            >
              <UserPlus />
            </motion.div>
            <h1>Inscription</h1>
            <p>Créez votre compte pour accéder à nos services</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="auth-form"
          >
            <div className="form-group">
              <label htmlFor="nom">Nom *</label>
              <input id="nom" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} required />
            </div>

            <div className="form-group">
              <label htmlFor="prenom">Prénom *</label>
              <input id="prenom" value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="votre@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Téléphone *</label>
              <input id="telephone" type="tel" value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe *</label>
              <input id="password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="••••••••" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmer le mot de passe *</label>
              <input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} placeholder="••••••••" required />
            </div>

            <button type="submit" className="auth-submit">
              <UserPlus /> S'inscrire
            </button>
          </motion.form>

          <div className="auth-footer">
            <p>Déjà un compte ? <Link to="/login">Se connecter</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
