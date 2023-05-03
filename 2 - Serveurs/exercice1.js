/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 100.50.25.12
   - Port : 6666

   Donne l'URL : http://100.50.25.12:6666
**/

/**
  Exercices :
  
  1.Vous devez créer un serveur HTTP en utilisant le module http de Node.js, qui retourne dans sa réponse HTTP un corps de réponse valide en format HTMLcontenant un title de votre choix et un <h1>Hello, World!</h1>. Il est important de s'assurer que le Mime Type correct (text/html) est spécifié dans l'en-tête de la réponse HTTP pour que le navigateur comprenne qu'il s'agit d'un document HTML.
**/ const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(
    "<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello, World!</h1></body></html>"
  );
  response.end();
});
server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});