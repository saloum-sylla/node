const fs = require("fs");

// Étape 2 : module personnel qui exporte une fonction d'écriture de fichier

const writeToFile = (message, fileName) => {
  fs.writeFile(fileName, message, { encoding: "utf8" }, (err) => {
    if (err) throw err;
    console.log(`Le fichier "${fileName}" a été créé avec succès !`);
  });
};

module.exports = { writeToFile:writeToFile };
