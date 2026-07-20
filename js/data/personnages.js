/* ============================================================
   PERSONNAGES
   ------------------------------------------------------------
   Pour ajouter un personnage : copiez le bloc de Shoku,
   collez-le à la suite (avant le ]; final) et modifiez :
   - id : identifiant unique en minuscules (ex : "zanark")
   - name, rp (texte affiché), arcs (["ft1","ft2","circus"])
   - glow : couleur d'aura (code hex)
   - img : "assets/personnages/mon-image.png" (PNG fond transparent conseillé)
   - quote, desc (paragraphes en <p>…</p>), perso, rel, fun
   - rel : "texte simple" OU ["texte du lien","id_du_perso_visé"]
   ============================================================ */
window.FV = window.FV || {};

window.FV.CHARS = [
  {id:"shoku", name:"Shoku", rp:"FreakyTown — Saisons 1 & 2", arcs:["ft1","ft2"], glow:"#7de89a", img:"assets/personnages/shoku.png",
   quote:"« Si cette histoire ne suit pas mon récit… alors elle n'a aucune raison d'exister. »",
   desc:"<p>Shoku est né avec une maladie qui affaiblissait fortement son corps. Durant toute son enfance, cette différence lui a valu d'être rejeté par les autres. Incapable de supporter cette solitude, il tenta un jour de mettre fin à ses jours.</p><p>Il ne mourut pas, mais sombra dans un long coma. Pendant cette période, il fit un rêve d'un réalisme saisissant : il y vivait entouré d'amis, partageait des aventures et connaissait enfin le bonheur qu'il n'avait jamais eu dans la réalité.</p><p>À son réveil, tout avait disparu. Ce monde n'avait jamais existé. Dès lors, Shoku se fixa un seul objectif : retrouver cette vie qu'il avait perdue.</p><p>Au fil des années, il bâtit sa fortune, développa son réseau et donna vie à son projet. Il rassembla toutes celles et ceux qui, comme lui, cherchaient un nouveau départ et fonda FreakyTown, un village où chacun pouvait écrire une nouvelle histoire.</p><p>La suite appartient à l'Histoire.</p>",
   perso:"Froid, manipulateur et détaché, Shoku ne se laisse guider que par ses propres envies. Les autres ne sont souvent, à ses yeux, qu'un moyen d'atteindre ses objectifs. Son besoin de tout contrôler est absolu : il refuse que le monde lui impose une réalité qu'il n'a pas choisie.",
   rel:[],
   fun:["Tout premier personnage créé du FreakyVerse.","Oui, c'est bien Ulquiorra de Bleach. À la base, Shoku ne devait pas aller si loin… alors son créateur lui a prêté un skin qu'il aimait. Finalement, impossible de revenir en arrière.","Shoku était si peu présent qu'il a fallu deux saisons avant que la plupart des personnages sachent réellement qui il était."]},
];
