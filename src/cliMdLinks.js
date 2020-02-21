const path = require('path');
const functionMdLinks = require('./mdLinks.js');
const functionsStats = require('./stats.js');

// const validate = require('./validate.js');

// console.log(validate);

const cliMdLinks = (route, options) => new Promise((resolve, reject) => {
  functionMdLinks.mdLinks(route, options)
    .then((links) => {
      if (links.length === 0) {
        resolve('El archivo o directorio no cuentiene links');
      } else if (options && options.stats && options.validate) {
        resolve(functionsStats.optionsValidateStats(route));
      } else if (options && options.stats) {
        resolve(functionsStats.optionStats(route));
      } else if (options && options.validate) {
        resolve(functionsStats.optionValidate(route));
      } else {
        const stringLinks = links.map((link) => `${path.relative(process.cwd(), link.path)} ${link.href} ${link.text}`);
        resolve(stringLinks.join('\n'));
      }
    }).catch((err) => {
      reject(err);
    });
});

module.exports = { cliMdLinks };


// const chalk = require('chalk');
// const functionsMdLink = require('../src/mdLinks.js');
// const stats = require('../src/stats.js');

// const showCli = (options) => {
//   // console.log(`showCli: ${Object.entries(options)}`);
//   return functionsMdLink.mdLinks(options.route, options)
//     .then((response) => {
//       // console.log(`mdLinks: ${response.length}`);
//       let output = '';
//       if (response.length === 0) {
//         output += chalk.yellow('No se encontraron links o archivos md.');
//       }
//       if ((options.stats) && (options.validate)) {
// eslint-disable-next-line max-len
//         output = `\n${chalk.cyan('Total: ')} ${response.length} \n${chalk.cyan('Unique: ')} ${stats.uniquesLinks(response)} \n${chalk.cyan('Broken: ')} ${stats.brokenLinks(response)}`;
//       }
//       if ((options.stats) && (!options.validate)) {
// eslint-disable-next-line max-len
//         output = `\n${chalk.cyan('Total: ')} ${response.length} \n${chalk.cyan('Unique: ')} ${stats.uniquesLinks(response)}`;
//       }
//       if ((!options.stats) && (options.validate)) {
//         response.forEach((objectLink) => {
//           if (objectLink.statusText === 'OK') {
// eslint-disable-next-line max-len
//             output += `\n${chalk.bgBlue.black(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.green(objectLink.status)} ${chalk.bgGreen.black(objectLink.statusText)} ${chalk.yellow(objectLink.text)}`;
//           } else {
// eslint-disable-next-line max-len
//             output += `\n${chalk.bgBlue.black(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.red(objectLink.status)} ${chalk.bgRed.black(objectLink.statusText)} ${chalk.yellow(objectLink.text)}`;
//           }
//         });
//       }
//       if ((!options.stats) && (!options.validate)) {
//         response.forEach((objectLink) => {
// eslint-disable-next-line max-len
//           output += `\n${chalk.bgBlue.black(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.yellow(objectLink.text)}`;
//         });
//       }
//       if ((!options.stats) && (!options.validate) && (!options.route)) {
// eslint-disable-next-line max-len
//         output = chalk.red('No se encontró el comando. Usa md-links --help para recibir información.');
//       }
//       return output;
//     })
//     .catch(() => chalk.yellow('Ingresa una ruta válida.'));
// };

// const readUserArguments = (listOfArgs = []) => {
//   const options = { route: '', stats: false, validate: false };
//   if (Array.isArray(listOfArgs) && (listOfArgs.length >= 3) && (listOfArgs.length <= 5)) {
//     listOfArgs.shift();
//     listOfArgs.shift();
//     listOfArgs.forEach((item) => {
//       switch (item) {
//         case '--stats':
//           options.stats = true;
//           break;
//         case '--validate':
//           options.validate = true;
//           break;
//         default:
//           options.route = item;
//       }
//     });
//   } else {
//     options.error = 'Error: missing or exceeding arguments';
//   }
//   return options;
// };

// module.exports = {
//   showCli,
//   readUserArguments,
// };
