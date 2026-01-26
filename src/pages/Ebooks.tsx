import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const Ebooks = () => {
  const ebooks = [
    {
      title: "Choisir son régime matrimonial : ce qu'il faut savoir avant de se marier",
      description: "Comprendre vos droits et obligations en tant que salarié.",
      price: "5 000 FCFA",
    },
    {
      title: "Le mariage civil : droits, obligations et avantages à connaître",
      description: "Mariage, divorce, succession : l'essentiel à connaître.",
      price: "4 000 FCFA",
    },
    {
      title: "Acheter un terrain en toute sécurité : les démarches essentielles",
      description: "Guide juridique pour entrepreneurs et PME.",
      price: "6 000 FCFA",
    },
  ];

  return (
    <Layout>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Nos E-books</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre collection de guides juridiques pour vous accompagner dans vos démarches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-xl border border-border overflow-hidden group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                >
                  <BookOpen className="w-16 h-16 text-primary/60 group-hover:text-primary transition-colors" />
                </motion.div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {ebook.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {ebook.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">{ebook.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
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

export default Ebooks;
