const fs = require('fs');
const path = require('path');
const functions = require('./index.js');
const functionValidate = require('../src/validateLinks.js');

const mdLinks = (route, options) => new Promise((resolve, reject) => {
  if (fs.existsSync(route)) {
    if (options.validate === true) {
      resolve(functionValidate.validateLink(route));
    } if (options.validate === false) {
      resolve(functions.saveLinksMds(route));
    }
  } else {
    reject(new Error(`No se encuentra la ruta: ${path.resolve(route)}`));
  }
});

// mdLinks('no route', { validate: true }).catch((e) => console.log(e));

// eslint-disable-next-line max-len
// console.log(mdLinks('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md', { validate: true }));

module.exports = { mdLinks };
