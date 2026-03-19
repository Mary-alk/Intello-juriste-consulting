import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import "../styles/auth.css";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connecter au backend
    toast({ title: "Connexion réussie !", description: "Bienvenue sur Intello Juriste." });
    navigate("/");
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
              <LogIn />
            </motion.div>
            <h1>Connexion</h1>
            <p>Connectez-vous à votre compte</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="auth-form"
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="auth-submit">
              <LogIn /> Se connecter
            </button>
          </motion.form>

          <div className="auth-footer">
            <p>Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
