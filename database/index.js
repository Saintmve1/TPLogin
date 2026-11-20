export { initDb } from './schema';
export { insererUtilisateur, listerUtilisateurs, verifierConnexion } from './utilisateurs'
// Étape 1.3 : brancher sur initDb et sur index.js
export {compterProduits, listerProduits, listerCategories, insererProduit } from './produits';
