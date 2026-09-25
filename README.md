# Wooby Store

Maquette interactive d'une boutique en ligne de mode homme et femme, realisee en HTML, CSS et JavaScript, sans framework ni backend.

## Apercu

Le site simule une boutique e-commerce complete :

- Catalogue de 5 produits organises en categories et sous-categories (Homme / Femme)
- Fiches produits avec galerie d'images, selecteurs de taille, avis clients et argumentaire vendeur
- Panier avec vente additionnelle, sauvegarde en `localStorage`
- Tunnel de commande complet : livraison, paiement, confirmation
- Interface responsive, pensee mobile en priorite (bouton d'achat flottant, formulaire de livraison minimal, commande sans creation de compte)

## Lancer le site en local

Le site est entierement statique. Deux options :

**Option 1 - ouverture directe**
Ouvrir `index.html` dans un navigateur.

**Option 2 - via un serveur local (recommande pour un rendu fidele)**
```
python -m http.server 8080
```
Puis ouvrir `http://localhost:8080` dans un navigateur.

## Structure du projet

```
Wooby Store/
├── index.html                 Page d'accueil
├── categorie-homme.html       Categorie Homme
├── categorie-femme.html       Categorie Femme
├── liste-produits.html        Liste des produits d'une sous-categorie
├── produit.html                Fiche produit (Hoodie Oversize)
├── produit-2.html a produit-5.html   Autres fiches produits
├── panier.html                 Panier
├── livraison.html              Etape livraison du tunnel de commande
├── paiement.html                Etape paiement du tunnel de commande
├── confirmation.html            Confirmation de commande
├── audit.html                   Note d'audit interne (justification des choix)
├── css/style.css                 Feuille de style
├── js/script.js                  Logique du panier et interactions
└── images/                       Visuels du catalogue
```

## Technologies

HTML5, CSS3, JavaScript (vanilla, sans dependance), polices Google Fonts (Fraunces, Manrope).
