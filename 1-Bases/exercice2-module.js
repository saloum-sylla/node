console.log("Je suis un module secondaire !");
console.log("Nom du dossier (global) : " + __dirname);
console.log("Nom du dossier (process) : " + process.cwd());

function direBonjour(nom) {
  console.log("Bonjour " + nom + " !");
}

module.exports = {
  direBonjour: direBonjour,
};

// module secondaire (exercice2-module.js)
function afficherInfosModule() {
  console.log("Je suis un module secondaire !");
  console.log("Nom du dossier (global) : " + __dirname);
  console.log("Nom du dossier (process) : " + process.cwd());
}

module.exports = {
  afficherInfosModule: afficherInfosModule,
};
