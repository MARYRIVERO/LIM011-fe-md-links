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
// console.log(identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md'));


const thisIsMd = (route) => (fs.existsSync(route) && path.extname(route) === '.md');
// console.log(thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/'));

const verifityFiles = (route) => {
  let pathArchive = [];
  if (identifyFile(route)) {
    pathArchive.push(route);
  } else {
    const files = fs.readdirSync(route);
    files.forEach((file) => {
      const routeActuality = path.join(route, file);
      pathArchive = pathArchive.concat(verifityFiles(routeActuality));
    });
  }
  return pathArchive;
};
console.log(verifityFiles('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas'));

// fs.readFileSync();


// const readContentOfFile = (route) => {
//   try {
//     return fs.readFileSync(route);
//   } catch (err) {
//     return '';
//   }
// };

// const thisIsMd = (route) => {
//   const pathExt = path.extname(route);

//   if (pathExt === '.md') {
//     return true;
//   }
//   return false;
// };

// const functionsIndex = {
//   isAbsolute: pathAbsolute,
//   convertToAbsolute: resolveToAbsolute,
//   isArchive: identifyFile,
//   isArchiveMd: thisIsMd,
// };
// module.exports = functionsIndex;

module.exports = {
  pathAbsolute,
  resolveToAbsolute,
  identifyFile,
  thisIsMd,
  verifityFiles,
};
