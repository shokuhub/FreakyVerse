# FreakyVerse — Site officiel

Bienvenue dans le code du site FreakyVerse ! Ce guide explique comment ajouter du contenu **sans rien casser**.

## 📁 Où se trouve quoi

| Fichier / dossier | Contenu |
|---|---|
| `js/data/personnages.js` | Tous les personnages |
| `js/data/mondes.js` | Les planètes : présentations, chronologies, archives |
| `js/data/arcs.js` | Les cinématiques et images de galerie, classées par arc |
| `js/data/site.js` | Le mot de passe du formulaire « Ajouter son personnage » |
| `assets/` | Toutes les images (logo, personnages, galerie, archives, cinématiques) |
| `index.html`, `css/`, `js/site.js` | Le site lui-même — **ne pas modifier** sauf besoin précis |

## ➕ Ajouter un personnage

1. Déposez son image dans `assets/personnages/` (PNG fond transparent conseillé)
2. Ouvrez `js/data/personnages.js`
3. Copiez le bloc de Shoku, collez-le à la suite, modifiez les champs (les explications sont en haut du fichier)

Le personnage apparaît dans la galerie, dans les « Personnages liés » de ses planètes, et dans la rotation aléatoire au survol des planètes.

## 🖼️ Ajouter un fan art / concept art

1. Déposez l'image dans `assets/galerie/`
2. Dans `js/data/arcs.js`, ajoutez dans le bon arc :
   `{img:"assets/galerie/mon-image.jpg", cap:"Fan art — Titre"},`

Elle apparaît dans la galerie du site **et** dans la planète de son arc, avec lightbox automatique.

## 🎬 Ajouter une cinématique

1. Déposez l'affiche dans `assets/cinematiques/`
2. Dans `js/data/arcs.js`, ajoutez dans le bon arc :
   `{t:"Titre", d:"Cinématique · 12 min", img:"assets/cinematiques/affiche.jpg", badge:"Nouveau", yt:"https://youtube.com/watch?v=XXXX"},`

Cliquer sur la carte ouvrira la vidéo YouTube.

## 📚 Remplir une archive (Secte, CEEO…)

Dans `js/data/mondes.js`, trouvez l'entrée (ex : `{id:"ceeo", …}`) et ajoutez :
- `desc:"<p>Premier paragraphe.</p><p>Deuxième.</p>"`
- `imgs:[{img:"assets/archives/photo.jpg", cap:"Légende"}]` (optionnel)

Dans n'importe quel texte de chronologie : `[[ceeo|le CEEO]]` crée un lien vers la fiche.

## 🎪 Ouvrir le Digital Circus

Dans `js/data/mondes.js`, supprimez `soon:true,` de l'entrée `circus` puis remplissez sa description/chronologie.

## 🔑 Changer le mot de passe

Dans `js/data/site.js`, modifiez la valeur de `window.FV.PASS`.

## 🚀 Mise à jour du site en ligne

Chaque modification enregistrée sur GitHub redéploie automatiquement le site via Vercel (~1 minute).
Pour modifier un fichier directement sur GitHub : ouvrez le fichier → icône crayon ✏️ → modifiez → **Commit changes**.
Pour ajouter des images : ouvrez le dossier `assets/…` → **Add file → Upload files**.
