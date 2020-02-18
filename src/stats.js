
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

module.exports = {
  uniquesLinks,
  brokenLinks,
};
