const validate = require('../src/validateLinks.js');

const ruta = '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md';
const output = [
  {
    href: 'https://nodejs.org/es/',
    path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },

  {
    href: 'https://developers.google.com/v8/',
    path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 200,
    statusText: 'OK',
    text: 'motor de JavaScript V8 de Chrome',
  },
  {
    href: 'https://nodefdjs.org/es/',
    path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    text: 'Noesuunlink.js',
    status: 'ERR',
    statusText: 'FAIL',
  },
];

describe('validateLink', () => {
  it('Debería retornar function', (done) => {
    expect(typeof validate.validateLink).toBe('function');
    done();
  });
  it('Deberia retornar status 200 para un link disponible', (done) => {
    validate.validateLink(ruta)
      .then((response) => {
        expect(response).toStrictEqual(output);
        done();
      });
  });
});
