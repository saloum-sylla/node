/**
 * npm install -g nodemon

  Exercices :
    
  1. Créez un serveur HTTP qui renvoie une réponse HTTP contenant un corps de réponse au format HTML valide uniquement si l'URL présente dans la requête HTTP inclut "/index". Pour obtenir des informations sur l'URL utilisée dans la requête HTTP, vous pouvez utiliser la propriété ".url" de l'objet représentant la requête entrante (qui est généralement une instance de la classe http.IncomingMessage).

/**
  2.Améliorez votre serveur HTTP de manière à ce que, si l'URL utilisée pour la requête HTTP ne contient pas "/index", le serveur génère une réponse HTTP ayant :

un code 404 dans l'en-tête ;
un message au for
**/
const http = require("http");

const server = http.createServer((req, res) => {
  // Si l'URL de la requête contient "/index"
  // if (req.url=="/index") {
  //   // Envoyer une réponse avec un code HTTP 200 OK et un contenu HTML
  //   res.writeHead(200, {
  //     "Content-Type": "text/html",
  //   });
  if (req.url.includes("/index")) {
    // Envoyer une réponse avec un code HTTP 200 OK et un contenu HTML
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Page d'accueil</title>
        </head>
        <body>
          <h1>Bienvenue sur la page d'accueil !</h1>
        </body>
      </html>
    `;
    // Écrire le contenu HTML dans la réponse et terminer la réponse
    res.write(html);
    res.end();

  } else {
    // Si l'URL de la requête ne contient pas "/index", envoyer une réponse avec un code HTTP 404 Not Found et un contenu HTML
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Page introuvable</title>
        </head>
        <body>
          <h1>404  La page que vous cherchez est introuvable.</h1>
        </body>
      </html>
    `;
    // Écrire le contenu HTML dans la réponse et terminer la réponse
    res.write(html);
    res.end();
  }
});

// Démarrer le serveur HTTP sur le port 3000
server.listen(3000, () => {
  console.log("Le serveur est démarré sur le port 3000.");
});
