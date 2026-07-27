/* ============================================================
   CONTENUS PAR ARC : CINÉMATIQUES & GALERIE
   ------------------------------------------------------------
   CINÉMATIQUE : {t:"Titre", d:"Type · Durée", img:"assets/cinematiques/mon-image.jpg",
                  badge:"Nouveau", yt:"https://youtube.com/watch?v=…"}
   (le champ yt est optionnel — s'il est présent, cliquer ouvre la vidéo)

   IMAGE DE GALERIE : {img:"assets/galerie/mon-image.jpg", titre:"Nom du dessin", artiste:"Pseudo de l'artiste"}
   (au clic, la légende affichée est "Titre — par Artiste")

   IMPORTANT — toutes les images vont dans LE MÊME dossier assets/galerie/
   (ou assets/cinematiques/ pour les affiches), peu importe leur arc.
   C'est UNIQUEMENT la ligne ci-dessous (dans ft1, ft2 ou circus) qui
   détermine à quel arc une image appartient — pas son dossier physique.
   Donc pas besoin de créer un sous-dossier par arc : un seul upload
   suffit, on trie tout ici avec du texte.
   ============================================================ */
window.FV = window.FV || {};

window.FV.ARCS = [
  {id:"ft1", name:"FreakyTown — Saison 1", color:"#3fe8d8"},
  {id:"ft2", name:"FreakyTown — Saison 2", color:"#5aa7ff"},
  {id:"circus", name:"The Freaky Digital Circus", color:"#ff6b6b"},
];
/* Contenus par arc — cinématiques : {t:"Titre", d:"Type · Durée", img:"url", badge:"Badge"} ; galerie : {img:"url", cap:"Légende"} */
window.FV.CINES = { ft1:[], ft2:[], circus:[] };
window.FV.GALLERY = {
    ft1:[
      {img:"assets/galerie/nanami.jpg", titre:"Jojo", artiste:"DocVar3n"},
      {img:"assets/galerie/violyyne.jpg", titre:"Thomas", artiste:"DocVar3n"},
      {img:"assets/galerie/mr-le-fou.jpg", titre:"Olivia", artiste:"Yunko"},
      {img:"assets/galerie/mat.jpg", titre:"Mat", artiste:"DocVar3n"},
      {img:"assets/galerie/rob-arka-pepe.jpg", titre:"Nanami", artiste:"Docvar3n"},
      {img:"assets/galerie/thomas-docvar3n.jpg", titre:"Mat", artiste:"DocVar3n"},
      {img:"assets/galerie/thomas-rob.jpg", titre:"Rob et Nanami", artiste:"Violynne"},
      {img:"assets/galerie/crocronayato.jpg", titre:"Nanami x Liliano", artiste:"DocVar3n"},
      {img:"assets/galerie/rob-et-nanami.jpg", titre:"CrocoNayato", artiste:"Violyyne"},
      {img:"assets/galerie/nanami-x-liliano.jpg", titre:"Violyyne", artiste:"Violyyne"},
      {img:"assets/galerie/jojo.jpg", titre:"Mr.Le fou", artiste:"DocVar3n"},
      {img:"assets/galerie/liliano.jpg", titre:"Kuji, Kikso et Agent Mark", artiste:"Yunko"},
      {img:"assets/galerie/kuji-agent-mark.jpg", titre:"Pepe, Rob et Arka", artiste:"Violyyne"},
      {img:"assets/galerie/olivia.jpg", titre:"Thomas", artiste:"Rob"}
    ],
    ft2:[],
    circus:[]
  };
