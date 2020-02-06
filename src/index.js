/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const path = require('path');
const fs = require('fs');
// const marked = require('marked');

// eslint-disable-next-line no-unused-vars
const pathAbsolute = (route) => path.isAbsolute(route);

const resolveToAbsolute = (route) => path.resolve(route);

const identifyFile = (route) => {
  const read = fs.lstatSync(route);
  const archive = read.isFile();
  return archive;
};
// console.log(identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md'));

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
// console.log(verifityFiles('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json'));

const thisIsMd = (route) => {
  const arrayTheFilesMd = verifityFiles(route).filter((element) => (path.extname(element) === '.md'));
  return arrayTheFilesMd;
};
// console.log(thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas'));

const readArchive = (route) => {
  const lectureTheArchive = fs.readFileSync(route, 'utf8');
  return lectureTheArchive;
};

// console.log(readArchive('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/prueba.md'));


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


// const searchMds = (routeFile) => {
//   const route = getAbsolutePath(routeFile);
//   let arrayFileMd = [];
//   if (isFile(route)) {
//     if (isMd(route)) {
//       arrayFileMd.push(route);
//     }
//   } else {
//     // const listOfFiles = fs.readdirSync(route);
//     const listOfFiles = getListOfFiles(route);
//     listOfFiles.forEach((file) => {
//       arrayFileMd = arrayFileMd.concat(searchMds(path.join(route, file)));
//     });
//   }
//   return arrayFileMd;
// };

// const saveLinksMds = (inputRoute) => {
//   const arrayOfRoutes = searchMds(inputRoute);
//   const arrayofLinks = [];
//   const render = new marked.Renderer();
//   arrayOfRoutes.forEach((route) => {
//     // const file = fs.readFileSync(route);
//     const file = readContentOfFile(route);
//     render.link = (hrefFile, titleFile, textFile) => {
//       arrayofLinks.push({
//         href: hrefFile,
//         text: textFile.substring(0, 50),
//         path: route,
//       });
//     };
//     marked(file.toString(), {
//       renderer: render,
//     });
//   });
//   return arrayofLinks;
// };

module.exports = {
  pathAbsolute,
  resolveToAbsolute,
  identifyFile,
  verifityFiles,
  thisIsMd,
  readArchive,
};
