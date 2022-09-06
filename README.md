<!-- PROJECT -->
<div align="center">

    <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="Logo" width="100" height="100">
    <h1 align="center">👉 Challenge DevOps 👈</h1>

</div>

<br/>

<!-- PREREQUISITES -->

### Prérequis

Ceci est un exemple de la liste des éléments dont vous avez besoin pour installer l'application.

```powershell
node, npm ou docker
```

### Objectifs

Vous devez réparer la chaîne d'intégration continue afin de déployer notre application 🚀

Avant tout, nous devons configurer notre environnement de déploiement, ceci est possible avec les étapes suivantes (une fois votre site cloné et les dépendances installer) :

Installation des dépendances en mode global

```powershell
npm install netlify-cli -g
```

Permet d'initialiser le déploiement et d'avoir une url unique

```powershell
netlify init
```

Afin de faire un build optimiser de votre application :

```powershell
npm run build && netlify build
```

Afin de déployer votre application dans un environnement de pré-production :

```powershell
netlify deploy
```

Afin de déployer votre application dans un environnement de production :

```powershell
netlify deploy --prod
```

<div align="center" style="margin-top:100px">
    <img src="https://blog.oxiane.com/wp-content/uploads/2017/02/npm-logo.png" alt="Logo" width="auto" height="100">
</div>

<!-- USAGE -->

### Installation avec npm

1. Clone le repository

```sh
git clone [repository]
```

2. Installation des dépendances de l'application (dans mon dossier cloner)

```powershell
npm install
```

3. Démarer le projet

```powershell
npm run start
```

### Usage

```powershell
# Local
http://localhost:3000
```

<div align="center" style="margin-top:100px">
    <img src="https://i.pinimg.com/originals/f5/5e/80/f55e8059ea945abfd6804b887dd4a0af.gif" alt="Logo" width="100" height="100">
</div>

### Installation avec Docker

1. Clone le repository

```sh
git clone [repository]
```

2. Build de l'application et des images

```powershell
docker-compose build
```

3. Démarer le projet

```powershell
docker-compose up
```

> **NOTE** Le nom du conteneur ici est "devops-web-development-challenge"

### Usage

```powershell
# node v16.XX.X
docker-compose exec devops-web-development-challenge node -v

# Local
http://localhost:3000

# On Your Network :
http://172.20.0.2:3000
```

### Aide

**ADRESSE_WEB :**
Url à mettre une fois le site déployer

**$NETLIFY_SITE_ID**
Pour obtenir l'id de votre site, veuillez vous rendre sur votre compte netlify : https://app.netlify.com cliquer sur votre site, puis sur site settings. Vous trouverez votre Site ID sous la rubrique site détails / site information
Site information -> Site ID.

**$NETLIFY_AUTH_TOKEN**
Pour obtenir le token, veuillez vous rendre sur le site suivant :
https://app.netlify.com/user/applications rubrique Personal access tokens afin d'en crée un.
