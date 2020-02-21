const path = require('path');
const functionsIndex = require('./index.js');
const functionsValidate = require('./validate');

const optionValidate = (route) => new Promise((resolve) => {
  functionsValidate.validateLink(route)
    .then((arrLinks) => {
      const strLinks = arrLinks.map((link) => `${path.relative(process.cwd(), link.path)} ${link.href} ${link.statusText} ${link.status} ${link.text}`);
      resolve(strLinks.join('\n'));
    });
});

// optionValidate('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md')
//   .then((res) => console.log(res));

const uniquesLinks = (arrayOfLinks) => {
  const countUniqueLinks = new Set(arrayOfLinks.map((link) => link.href));
  return countUniqueLinks.size;
};

// eslint-disable-next-line max-len
// console.log(uniquesLinks(['/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md']));


const brokenLinks = (arrayOfLinks) => {
  const countBrokenLinks = arrayOfLinks.filter((link) => link.statusText === 'FAIL').length;
  return countBrokenLinks;
};

const optionStats = (route) => new Promise((resolve) => {
  const arrMdLinks = functionsIndex.saveLinksMds(route);
  resolve(`Total: ${arrMdLinks.length}\nUnique: ${uniquesLinks(arrMdLinks)}`);
});

// Función que devuelve los stats y validación de los links en string
const optionsValidateStats = (route) => new Promise((resolve) => {
  functionsValidate.validateLink(route)
    .then((links) => {
      resolve(`Total: ${links.length}\nUnique: ${uniquesLinks(links)}\nBroken: ${brokenLinks(links)}`);
    });
});

module.exports = {
  uniquesLinks,
  brokenLinks,
  optionValidate,
  optionStats,
  optionsValidateStats,

};
