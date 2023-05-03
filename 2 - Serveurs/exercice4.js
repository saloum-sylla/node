/**

Exercice 1 :
Créez deux fichiers HTML valides, home.html et about.html. Ensuite, créez un serveur HTTP qui renvoie le contenu de ces fichiers dans sa réponse HTTP selon les conditions suivantes :

Si l'URL utilisée pour effectuer la requête HTTP contient la ressource /accueil, le serveur doit renvoyer le contenu du fichier home.html dans la réponse HTTP.
Si l'URL utilisée pour effectuer la requête HTTP contient la ressource /about, le serveur doit renvoyer le contenu du fichier about.html dans la réponse HTTP.
*/
const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  let url = req.url;
  let filePath;
  let entêteReponseHTTP;

  // Vérifier si l'URL contient la ressource /accueil ou /about
  if (url === "/accueil") {
    filePath = "home.html";

    // On écrit les en-têtes de la réponse HTTP avec un code de statut 200 et un type de contenu HTML
    entêteReponseHTTP = res.writeHead(200, { "Content-Type": "text/html" });
  } else if (url === "/about") {
    filePath = "about.html";
    // On écrit les en-têtes de la réponse HTTP avec un code de statut 200 et un type de contenu HTML
    entêteReponseHTTP = res.writeHead(200, { "Content-Type": "text/html" });
  } else {
    // Si l'URL ne correspond à aucune des ressources attendues, renvoyer la page 404
    filePath = "404.html";
    entêteReponseHTTP = res.writeHead(404, { "Content-Type": "text/html" });
  }

  // Lire le contenu du fichier correspondant à l'URL
  fs.readFile(filePath, "utf8", (err, htmlContent) => {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.end("Erreur interne du serveur");
    } else {
      // Renvoyer le contenu du fichier dans la réponse HTTP
      // res.writeHead(200, { "Content-Type": "text/html" });
      entêteReponseHTTP;
      res.end(htmlContent);
    }
  });
});

server.listen(port, () => {
  console.log(`Serveur à l'écoute sur le port ${port}`);
});

/*
Exercice 2 :
Créez un fichier HTML valide nommé 404.html. Ensuite, créez un serveur HTTP qui renvoie le contenu de ce fichier dans sa réponse HTTP si l'URL utilisée pour effectuer la requête HTTP ne contient ni la ressource /accueil ni la ressource /about. N'oubliez pas de spécifier le code 404 dans les en-têtes de la réponse HTTP.
**/
