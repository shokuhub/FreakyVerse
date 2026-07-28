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
      {img:"assets/galerie/lilian.png", titre:"Liliano", artiste:"DocVar3n"},
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
    ft2:[
      {img:"assets/galerie/commission shoku secte.png", titre:"La secte (Thalia, Prima et Isaac)", artiste:"ziad_btw (instagram)"},
      {img:"assets/galerie/shokudragon (1).png", titre:"Shoku et Dragon", artiste:"Ziad_btw (instagram)"},       
      {img:"assets/galerie/rob.png", titre:"Rob", artiste:"Rob"},
      {img:"assets/galerie/nanamizombie.png", titre:"Nanami", artiste:"DocVar3n"},
      {img:"assets/galerie/igor.png", titre:"Igor", artiste:"Aurélie"},
      {img:"assets/galerie/Nyx.jpg", titre:"NYX", artiste:"Violyyne"},
      {img:"assets/galerie/nynyx.jpg", titre:"Nyx", artiste:"Violyyne"},
      {img:"assets/galerie/nyxxx.png", titre:"Nyx", artiste:"Violyyne"},
      {img:"assets/galerie/Nyxetpimprenelle.jpg", titre:"Nyx Pimprenelle", artiste:"Violyyne"},
      {img:"assets/galerie/nyxmaveneliza.jpg", titre:"Nyx Maven Elizabeth", artiste:"Violyyne"},
      {img:"assets/galerie/nanaminoel.jpg", titre:"Nanami (version noël)", artiste:"Violyyne"},
      {img:"assets/galerie/zanark.jpg", titre:"Zanark", artiste:"Violyyne"},
      {img:"assets/galerie/Isaac.jpg", titre:"Isaac", artiste:"Violyyne"},
      {img:"assets/galerie/alicepimprenelle.jpg", titre:"Alice Pimprenelle", artiste:"Violyyne"},
      {img:"assets/galerie/loyga.jpg", titre:"Loyga", artiste:"DocVar3n"},
      {img:"assets/galerie/pimp.png", titre:"Pimprenelle", artiste:"Aurélie"},
      {img:"assets/galerie/edgaralicedragon.jpg", titre:"Edgar, Alice et Dragon (CEEO)", artiste:"Lyly"},
      {img:"assets/galerie/ceeo.jpg", titre:"CEEO", artiste:"Lyly"},
      {img:"assets/galerie/SacrificeLoyga.png", titre:"Sacrifice Loyga", artiste:"Ziad_btw (Instagram)"},
      {img:"assets/galerie/evelynn.png", titre:"Evelynn", artiste:"Yunko"},
      {img:"assets/galerie/nanamipiute.jpg", titre:"Nanami piute", artiste:"DocVar3n"},
      {img:"assets/galerie/thalia.jpg", titre:"Thalia", artiste:"Violyyne"},
      {img:"assets/galerie/dragon.png", titre:"Dragon", artiste:"Aurélie"},
      {img:"assets/galerie/pimprenelle.jpg", titre:"Pimprenelle", artiste:"Lyly"},
      {img:"assets/galerie/nanamibonbon.png", titre:"Nanami et Bonbon", artiste:"DocVar3n"},
      {img:"assets/galerie/pekey.jpg", titre:"Pekey", artiste:"Violyyne"},
      {img:"assets/galerie/Manuel.png", titre:"Manuel", artiste:"Aurélie"},
      {img:"assets/galerie/manueletnanami.png", titre:"Manuel x Nanami", artiste:"DocVar3n"},
      {img:"assets/galerie/nanamii.png", titre:"Nanami", artiste:"Aurélie"},
      {img:"assets/galerie/NyraetElizabeth.png", titre:"Nyra Elizabeth", artiste:"Rob"},
      {img:"assets/galerie/nyrakael.png", titre:"Nyra et Kael", artiste:"Rob"},
      {img:"assets/galerie/purpleaaurelia.png", titre:"Purple et Aurélia", artiste:"Aurélie"},
      {img:"assets/galerie/kaelsuzanetlareine.png", titre:"Kael, Suzan et la reine", artiste:"Alex_ane"},
      {img:"assets/galerie/nanamisacrificeloyga.png", titre:"Nanami devant sacrifice Loyga", artiste:"DocVar3n"},
      {img:"assets/galerie/nanamiloyga.png", titre:"Nanami et Loyga snif", artiste:"DocVar3n"},
      {img:"assets/galerie/lennie.png", titre:"Lennie", artiste:"Aurélie"},
      {img:"assets/galerie/violyyneetscience.jpg", titre:"Irvin x Violyyne", artiste:"Violyyne"},
      {img:"assets/galerie/laboirvine.jpg", titre:"Labo d'Irvin", artiste:"Violyyne"},
      {img:"assets/galerie/Irvin.jpg", titre:"Irvin", artiste:"Violyyne"},
      {img:"assets/galerie/police.png", titre:"Kael, Nyra et Freyja", artiste:"itsgoofydoodles"}
    ],
    circus:[]
  };
