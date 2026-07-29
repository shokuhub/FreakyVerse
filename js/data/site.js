/* ============================================================
   RÉGLAGES GÉNÉRAUX DU SITE
   ============================================================ */
window.FV = window.FV || {};

/* Mot de passe pour créer un personnage (bouton +)
   ------------------------------------------------------------
   Par sécurité, le mot de passe n'est JAMAIS écrit en clair ici —
   seule son empreinte (hash SHA-256) est stockée. Comme ça, quelqu'un
   qui ouvre "Inspecter" sur le site ne voit qu'une suite de lettres
   et chiffres illisible, pas le vrai mot de passe.

   MOT DE PASSE ACTUEL : 
   (à communiquer sur le Discord — changez-le dès que vous voulez
   via la méthode ci-dessous)

   POUR CHANGER LE MOT DE PASSE VOUS-MÊME (sans repasser par Claude) :
   1. Ouvrez le site en ligne, faites clic droit → Inspecter → onglet "Console"
   2. Collez cette ligne en remplaçant NOUVEAU_MOT_DE_PASSE par votre choix, puis Entrée :
      crypto.subtle.digest('SHA-256',new TextEncoder().encode('NOUVEAU_MOT_DE_PASSE')).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))
   3. Une suite de 64 caractères s'affiche : copiez-la
   4. Collez-la ci-dessous à la place de la valeur de PASS_HASH (entre guillemets)
   5. Commit changes sur GitHub — le nouveau mot de passe est actif en ~1 minute */
window.FV.PASS_HASH = '5dc1eb02f04f3df897e57841494321a4912727ddfb0bc83ee79d60f9b1960ed4';

/* Base de données partagée (Supabase) — les personnages soumis
   arrivent en "attente" et apparaissent une fois passés en "valide" */
window.FV.SUPABASE_URL = 'https://cxxzbocpamhhmpedmxfi.supabase.co';
window.FV.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4eHpib2NwYW1oaG1wZWRteGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NzczMjIsImV4cCI6MjEwMDE1MzMyMn0.fNrpiwvyY57mzAFTKloeJ52Wt56u6MOQMRSsaokkuKY';
