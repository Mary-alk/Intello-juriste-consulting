

# Plan : Réécrire le site sans Tailwind CSS — CSS pur + Framer Motion

## Résumé

Remplacer toutes les classes Tailwind par du CSS classique dans des fichiers `.css` dédiés, tout en gardant Framer Motion pour les animations et la structure React/React Router existante.

## Fichiers à modifier/créer

### 1. `src/index.css` — Réécriture complète
- Supprimer les directives `@tailwind` et `@layer`
- Définir les variables CSS (couleurs, rayons) en `:root`
- Ajouter les styles globaux : `body`, `*`, reset de base

### 2. `src/styles/navbar.css` — Styles de la navigation
- Sticky top, fond semi-transparent avec backdrop-filter
- Flex layout logo + boutons
- Styles des boutons nav avec état actif (fond bleu)

### 3. `src/styles/footer.css` — Styles du footer
- Fond sombre, flex wrap pour les contacts
- Séparateur et copyright

### 4. `src/styles/index.css` — Page d'accueil
- Hero section centré
- Grille de 3 cartes services (CSS Grid)
- Section sécurité avec layout flex
- Section CTA avec 2 cartes côte à côte

### 5. `src/styles/ebooks.css` — Page E-books
- Grille de 3 cartes avec image placeholder, titre, prix, bouton
- Hover effects via CSS

### 6. `src/styles/rendezvous.css` — Page RDV
- Formulaire centré, inputs stylisés, boutons submit/cancel
- Remplacer les composants shadcn `Input`, `Textarea`, `Button`, `Label` par des éléments HTML natifs stylisés

### 7. Composants React — Mise à jour
- **Navbar.tsx** : Remplacer `className` Tailwind par des classes CSS classiques, importer le CSS
- **Footer.tsx** : Idem
- **Layout.tsx** : Idem, ajouter import du CSS global
- **Index.tsx** : Remplacer Tailwind, garder Framer Motion
- **Ebooks.tsx** : Idem
- **RendezVous.tsx** : Remplacer les composants shadcn (Input, Textarea, Button, Label) par `<input>`, `<textarea>`, `<button>`, `<label>` natifs. Garder la logique useState et le toast.

## Ce qui reste inchangé
- **Framer Motion** pour toutes les animations (fade-in, slide, hover, whileInView)
- **React Router** pour la navigation
- **Lucide icons** pour les icônes
- **Structure des pages et composants**
- **Toast** (shadcn) pour les notifications (on le garde car c'est un composant JS isolé)

## Palette de couleurs (conservée)
- Primaire : bleu `#1a5bc4`
- Fond : `#fafafa`
- Texte : `#1e293b`
- Texte secondaire : `#64748b`
- Bordures : `#e2e8f0`
- Cartes : `#ffffff`

## Approche
- Un fichier CSS par composant/page pour la clarté
- Responsive avec `@media` queries au lieu des classes `md:`
- Breakpoint principal à 768px

