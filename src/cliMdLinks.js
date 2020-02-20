const path = require('path');
const functionMdLinks = require('./mdLinks.js');
const functionsStats = require('./stats.js');

const cliMdLinks = (route, options) => new Promise((resolve, reject) => {
  functionMdLinks.mdLinks(route, options)
    .then((links) => {
      if (links.length === 0) {
        resolve('El archivo o directorio no cuentiene links');
      } else if (options && options.stats && options.validate) {
        resolve(functionsStats.OptionsValidateStats(route));
      } else if (options && options.stats) {
        resolve(functionsStats.optionStats(route));
      } else if (options && options.validate) {
        resolve(functionsStats.optionValidate(route));
      } else {
        const stringLinks = links.map((link) => `${path.relative(process.cwd(), link.filePath)} ${link.hrefPath} ${link.textPath}`);
        resolve(stringLinks.join('\n'));
      }
    }).catch((err) => {
      reject(err);
    });
});

module.exports = { cliMdLinks };
