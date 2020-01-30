// eslint-disable-next-line no-unused-vars
const path = require('path');
const fs = require('fs');

// eslint-disable-next-line no-unused-vars
const pathAbsolute = (route) => path.isAbsolute(route);

const resolveToAbsolute = (route) => path.resolve(route);

const identifyFile = (route) => {
  const read = fs.lstatSync(route);
  const archive = read.isFile();
  return archive;
};
console.log(identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md'));

const functionsIndex = {
  isAbsolute: pathAbsolute,
  convertToAbsolute: resolveToAbsolute,
  isArchive: identifyFile,

};

module.exports = functionsIndex;

// /home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/src
// /home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/src/index.js
