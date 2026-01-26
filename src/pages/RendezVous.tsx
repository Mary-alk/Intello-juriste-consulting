import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Send, X } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Calendar className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Prendre rendez-vous</h1>
            <p className="text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous recontacterons.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-xl border border-border space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="nom">Nom *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                required
                className="mt-1"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                required
                className="mt-1"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="telephone">Numéro de téléphone *</Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                required
                className="mt-1"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Label htmlFor="email">Email (facultatif)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Label htmlFor="motif">Motif du rendez-vous (facultatif)</Label>
              <Textarea
                id="motif"
                value={formData.motif}
                onChange={(e) => setFormData({ ...formData, motif: e.target.value })}
                className="mt-1 min-h-[100px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex gap-4 pt-4"
            >
              <Button
                type="submit"
                className="flex-1 gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="flex-1 gap-2"
              >
                <X className="w-4 h-4" />
                Annuler
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default RendezVous;
