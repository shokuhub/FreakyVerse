/* ============================================================
   CONTENUS PAR ARC : CINÉMATIQUES & GALERIE
   ------------------------------------------------------------
   CINÉMATIQUE : {t:"Titre", d:"Type · Durée", img:"assets/cinematiques/mon-image.jpg",
                  badge:"Nouveau", yt:"https://youtube.com/watch?v=…"}
   (le champ yt est optionnel — s'il est présent, cliquer ouvre la vidéo)

   IMAGE DE GALERIE : {img:"assets/galerie/mon-image.jpg", cap:"Légende affichée"}

   1. Déposez vos fichiers images dans assets/galerie/ ou assets/cinematiques/
   2. Ajoutez une ligne dans le bon arc ci-dessous
   Tout se met à jour automatiquement (sections + planètes).
   ============================================================ */
window.FV = window.FV || {};

window.FV.ARCS = [
  {id:"ft1", name:"FreakyTown — Saison 1", color:"#3fe8d8"},
  {id:"ft2", name:"FreakyTown — Saison 2", color:"#5aa7ff"},
  {id:"circus", name:"The Freaky Digital Circus", color:"#ff6b6b"},
];
/* Contenus par arc — cinématiques : {t:"Titre", d:"Type · Durée", img:"url", badge:"Badge"} ; galerie : {img:"url", cap:"Légende"} */
window.FV.CINES = { ft1:[], ft2:[], circus:[] };
window.FV.GALLERY = { ft1:[], ft2:[], circus:[] };
