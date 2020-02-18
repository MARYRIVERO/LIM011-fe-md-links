const fs = require('fs');
const path = require('path');
const functions = require('./index.js');
const validate = require('../src/validateLinks.js');

const mdLinks = (route, options) => {
  if (fs.existsSync(route)) {
    if (options && options.validate) {
      return validate.linksValidate(route);
    } return functions.readFileMd(route);
  } return (new Error(`No se encuentra la ruta: ${path.resolve(route)}`));
};

// eslint-disable-next-line max-len
// console.log(mdLinks(['/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md','options']));

module.exports = { mdLinks };
