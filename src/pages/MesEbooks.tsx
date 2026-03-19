import { motion } from "framer-motion";
import { BookOpen, Library } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import "../styles/mes-ebooks.css";

const MesEbooks = () => {
  // TODO: récupérer les ebooks achetés depuis le backend
  const purchasedEbooks: { title: string; purchaseDate: string }[] = [];

  return (
    <Layout>
      <section className="mes-ebooks-section">
        <div className="mes-ebooks-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mes-ebooks-header"
          >
            <h1>Mes E-books</h1>
            <p>Retrouvez ici tous les e-books que vous avez achetés.</p>
          </motion.div>

          {purchasedEbooks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mes-ebooks-empty"
            >
              <div className="mes-ebooks-empty-icon">
                <Library />
              </div>
              <h3>Aucun e-book pour le moment</h3>
              <p>Vous n'avez pas encore acheté d'e-book. Parcourez notre bibliothèque pour découvrir nos guides juridiques.</p>
              <Link to="/bibliotheque" className="btn-primary">Voir la bibliothèque</Link>
            </motion.div>
          ) : (
            <div className="ebooks-grid">
              {purchasedEbooks.map((ebook, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  className="ebook-card"
                >
                  <div className="ebook-cover">
                    <BookOpen />
                  </div>
                  <div className="ebook-body">
                    <h3>{ebook.title}</h3>
                    <p>Acheté le {ebook.purchaseDate}</p>
                    <button className="btn-primary">Lire</button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MesEbooks;
