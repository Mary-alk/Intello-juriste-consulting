import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import "../styles/ebooks.css";

const Bibliotheque = () => {
  // ═══════════════════════════════════════════════════════
  // 📚 CATALOGUE DES EBOOKS — Modifier ici les titres, descriptions, prix et images
  // Pour ajouter un ebook : copier un bloc et remplir les champs
  // Pour l'image : mettre le fichier dans /public/ et renseigner le chemin dans "cover"
  // ═══════════════════════════════════════════════════════
  const ebooks = [
    {
      title: "Choisir son régime matrimonial : ce qu'il faut savoir avant de se marier",
      description: "Comprendre vos droits et obligations en tant que salarié.",
      price: "5 000 FCFA",
      cover: "", // ex: "/covers/ebook1.jpg"
    },
    {
      title: "Le mariage civil : droits, obligations et avantages à connaître",
      description: "Mariage, divorce, succession : l'essentiel à connaître.",
      price: "4 000 FCFA",
      cover: "",
    },
    {
      title: "Acheter un terrain en toute sécurité : les démarches essentielles",
      description: "Guide juridique pour entrepreneurs et PME.",
      price: "6 000 FCFA",
      cover: "",
    },
  ];

  return (
    <Layout>
      <section className="ebooks-section">
        <div className="ebooks-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ebooks-header"
          >
            <h1>Bibliothèque</h1>
            <p>Découvrez notre catalogue de guides juridiques pour vous accompagner dans vos démarches.</p>
          </motion.div>

          <div className="ebooks-grid">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="ebook-card"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="ebook-cover">
                  {ebook.cover ? (
                    <img src={ebook.cover} alt={ebook.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.5rem" }} />
                  ) : (
                    <BookOpen />
                  )}
                </motion.div>

                <div className="ebook-body">
                  <h3>{ebook.title}</h3>
                  <p>{ebook.description}</p>

                  <div className="ebook-footer">
                    <span className="ebook-price">{ebook.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Obtenir
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bibliotheque;
