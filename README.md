# Portfolio Thibaut Gayrard

Portfolio professionnel pour la création de sites vitrines pour petites entreprises locales à Nice.

## 📁 Structure du projet

```
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Animations au scroll
├── favicon.svg         # Logo du navigateur
├── assets/
│   └── images/
│       └── profil.jpg  # Photo de profil
└── README.md          # Ce fichier
```

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un compte GitHub

- Va sur [github.com](https://github.com)
- Clique sur "Sign up"
- Crée un compte avec ton email

### Étape 2 : Créer un nouveau repository

1. Une fois connecté, clique sur "+" en haut à droite
2. Sélectionne "New repository"
3. **Nom du repository** : `portfolio` (ou `thibaut-portfolio`)
4. **Description** : "Portfolio de création de sites vitrines"
5. Coche **"Public"** (important pour GitHub Pages gratuit)
6. Clique sur "Create repository"

### Étape 3 : Uploader les fichiers

**Option A : Via GitHub.com (plus facile)**

1. Dans la page du repository, clique sur "Add file" → "Upload files"
2. Glisse-dépose tous tes fichiers (index.html, styles.css, script.js, favicon.svg, AGENTS.md)
3. Crée aussi le dossier `assets/images/` et upload ta photo
4. Clique sur "Commit changes"

**Option B : Via Git (ligne de commande)**

```powershell
# Initialiser Git dans le dossier du projet
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Premier commit : portfolio"

# Ajouter le remote GitHub
git remote add origin https://github.com/TONUSERNAME/portfolio.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Va sur ton repository GitHub
2. Clique sur l'onglet **"Settings"**
3. Dans le menu de gauche, clique sur **"Pages"**
4. Sous "Build and deployment" → "Source"
5. Sélectionne **"Deploy from a branch"**
6. Branche : **"main"** et dossier **"/ (root)"**
7. Clique sur "Save"

### ✅ C'est prêt !

Après quelques secondes, tu verras l'URL de ton site :

```
https://TONUSERNAME.github.io/portfolio
```

## 🎨 Personnalisation

- **Couleurs** : Modifie les variables CSS dans `styles.css` (cherche `--color-primary`)
- **Contenu** : Change le texte directement dans `index.html`
- **Photo** : Remplace `assets/images/profil.jpg` par ta photo

## 📱 Test local

Pour tester le site avant de publier :

```powershell
# Depuis le dossier du projet
python -m http.server 8000
```

Puis ouvre : `http://localhost:8000`

## 📝 Notes

- Pas de framework (HTML/CSS/JS pure)
- Responsive design (mobile-first)
- Animations fluides
- Performance optimisée
- Facilement maintenable

---

**Author**: Thibaut Gayrard  
**Email**: thibautgayrard2008@gmail.com  
**Localisation**: Nice, France
