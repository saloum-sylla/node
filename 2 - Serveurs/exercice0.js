// Le module http de Node.js permet de créer un serveur HTTP. Pour cela, on utilise la méthode createServer() de l'objet http, qui retourne un objet de type http.Server. Les objets de type http.Server héritent des caractéristiques d'un objet de type EventEmitter, ce qui permet de leur associer des gestionnaires d'événements en utilisant la méthode on(). L'événement le plus couramment utilisé pour un serveur HTTP est 'request', qui est déclenché chaque fois qu'une requête HTTP est reçue.

// Pour répondre à une requête HTTP, on utilise l'objet http.ServerResponse qui est fourni comme second paramètre au gestionnaire d'événement 'request'. La méthode writeHead() permet de définir l'en-tête de la réponse HTTP, tandis que la méthode write() permet d'écrire le corps de la réponse. Enfin, la méthode end() permet de terminer la réponse et de couper la connexion avec le client HTTP.

// Voici un exemple de code qui utilise le module http pour créer un serveur HTTP :
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Received request:", req.method, req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, world!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
