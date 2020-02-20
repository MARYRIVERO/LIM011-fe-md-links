const fetch = require('node-fetch');
const routes = require('./index.js');
// `${process.cwd()}/README.md`


const validateLink = (route) => {
  const arrayOfLinks = routes.saveLinksMds(route);
  // console.log(arrayOfLinks);
  const arrayPromises = arrayOfLinks.map((link) => fetch(link.href)
    .then((response) => {
      // console.log(response);
      if (response.status >= 200 && response.status < 400) {
        return {
          ...link,
          status: response.status,
          statusText: response.statusText,
        };
      }
      // console.log(response.status);
      return {
        ...link,
        status: response.status,
        statusText: 'FAIL',
      };
    })
    .catch(() => ({
      ...link,
      status: 'ERR',
      statusText: 'FAIL',
    })));
  return Promise.all(arrayPromises);
};

// validateLink('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md')
//   .then((res) => console.log(res));

module.exports = {
  validateLink,
};
