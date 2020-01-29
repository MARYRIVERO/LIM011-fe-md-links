// eslint-disable-next-line no-unused-vars
const path = require('path');

// eslint-disable-next-line no-unused-vars
const pathAbsolute = (route) => path.isAbsolute(route);
const resolveToAbsolute = (route) => path.resolve(route);

const functionsIndex = {
  isAbsolute: pathAbsolute,
  convertirAbsoluta: resolveToAbsolute,
};

module.exports = functionsIndex;
