/* =========================================================
   WOOBY STORE — Interactions front (maquette, sans backend)
   Le panier est simulé avec localStorage pour donner l'illusion
   d'un vrai tunnel d'achat qui se souvient de la sélection.
   ========================================================= */

/* ---------- Menu mobile (hamburger) ---------- */
function toggleMenuMobile() {
  const menu = document.getElementById("menu-mobile");
  if (menu) menu.classList.toggle("ouvert");
}

/* ---------- Panier simulé (localStorage) ---------- */
const PANIER_CLE = "wooby_panier";

function lirePanier() {
  try {
    return JSON.parse(localStorage.getItem(PANIER_CLE)) || [];
  } catch (e) {
    return [];
  }
}

function ecrirePanier(panier) {
  try {
    localStorage.setItem(PANIER_CLE, JSON.stringify(panier));
  } catch (e) {
    /* navigation privée : le panier ne persiste pas d'une page à l'autre */
  }
}

function ajouterAuPanier(produit) {
  const panier = lirePanier();
  const existant = panier.find(
    (p) => p.id === produit.id && p.couleur === produit.couleur && p.taille === produit.taille
  );
  if (existant) {
    existant.quantite += produit.quantite;
  } else {
    panier.push(produit);
  }
  ecrirePanier(panier);
  mettreAJourBadgePanier();
}

function retirerDuPanier(index) {
  const panier = lirePanier();
  panier.splice(index, 1);
  ecrirePanier(panier);
  if (typeof afficherPanier === "function") afficherPanier();
  mettreAJourBadgePanier();
}

function mettreAJourBadgePanier() {
  const panier = lirePanier();
  const total = panier.reduce((acc, p) => acc + p.quantite, 0);
  document.querySelectorAll(".badge-panier").forEach((el) => {
    el.textContent = total;
  });
}

/* ---------- Fiche produit : galerie + variantes ---------- */
function changerImagePrincipale(src, btn) {
  const principale = document.getElementById("image-principale");
  if (principale) principale.src = src;
  document.querySelectorAll(".galerie-vignettes button").forEach((b) => b.classList.remove("actif"));
  if (btn) btn.classList.add("actif");
}

/* Associe chaque couleur à sa photo : évite le doute "vais-je recevoir la bonne couleur ?" */
function choisirCouleur(couleur, imageAssociee, btn) {
  document.querySelectorAll(".pastille-couleur").forEach((b) => b.classList.remove("actif"));
  if (btn) btn.classList.add("actif");
  if (imageAssociee) changerImagePrincipale(imageAssociee, null);
  const label = document.getElementById("couleur-choisie");
  if (label) label.textContent = couleur;
}

function choisirTaille(taille, btn) {
  document.querySelectorAll(".pastille-taille").forEach((b) => b.classList.remove("actif"));
  if (btn) btn.classList.add("actif");
  const label = document.getElementById("taille-choisie");
  if (label) label.textContent = taille;
}

/* ---------- Accordéon (onglets dépliables) ---------- */
function toggleAccordeon(el) {
  el.parentElement.classList.toggle("ouvert");
}

/* ---------- Quantité (fiche produit et panier) ---------- */
function changerQuantite(id, delta) {
  const champ = document.getElementById("qte-" + id);
  if (!champ) return;
  let val = parseInt(champ.textContent, 10) + delta;
  if (val < 1) val = 1;
  champ.textContent = val;
}

/* ---------- Initialisation commune ---------- */
document.addEventListener("DOMContentLoaded", () => {
  mettreAJourBadgePanier();
});
