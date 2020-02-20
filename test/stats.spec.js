const stats = require('../src/stats.js');

const array = [
  {
    href: 'https://nodejs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },
  {
    href: 'https://nodejs.org/es/.co',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 404,
    statusText: 'FAIL',
    text: 'Node.js',
  },
  {
    href: 'https://nodefdjs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 'ERR',
    statusText: 'FAIL',
    text: 'Noesuunlink.js',
  },

  {
    href: 'https://noesunlink.or/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 'ERR',
    statusText: 'FAIL',
    text: 'Noesuunlink.js',
  },
  {
    href: 'https://noesunlink.or/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 'ERR',
    statusText: 'FAIL',
    text: 'Noesuunlink.js',
  },
];

describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof stats.brokenLinks).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links rotos', (done) => {
    expect(stats.brokenLinks(array)).toBe(4);
    done();
  });
});

describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof stats.uniquesLinks).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links unicos', (done) => {
    expect(stats.uniquesLinks(array)).toBe(4);
    done();
  });
});
