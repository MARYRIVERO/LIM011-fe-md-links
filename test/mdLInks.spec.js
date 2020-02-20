// const fetchMock = require('fetch-mock');
const path = require('path');

const functions = require('../src/mdLinks.js');

// jest.mock('node-fetch);

const ruta = '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md';
const output = [
  {
    href: 'https://nodejs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    text: 'Node.js',
  },

  {
    href: 'https://developers.google.com/v8/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    text: 'motor de JavaScript V8 de Chrome',
  },
  {
    href: 'https://nodefdjs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    text: 'Noesuunlink.js',
  },
];

const rutaTwo = '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md';

const output2 = [
  {
    href: 'https://nodejs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },

  {
    href: 'https://developers.google.com/v8/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    status: 200,
    statusText: 'OK',
    text: 'motor de JavaScript V8 de Chrome',
  },
  {
    href: 'https://nodefdjs.org/es/',
    path: '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
    text: 'Noesuunlink.js',
    status: 'ERR',
    statusText: 'FAIL',
  },
];

describe('Md links', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.mdLinks).toBe('function');
  });
  it('Debería retornar el link del primer elemento del array de links', () => {
    functions.mdLinks(ruta, { validate: false }).then((response) => {
      expect(response).toStrictEqual(output);
    });
  });

  it('Debería retornar el link del primer elemento del array de links', (done) => {
    functions.mdLinks(rutaTwo, { validate: true }).then((response) => {
      expect(response).toStrictEqual(output2);
      done();
    });
  });

  it('should show a message: No se encuentra la ruta', () => functions.mdLinks('no-route')
    .catch((err) => {
      expect(err.message).toEqual(`No se encuentra la ruta: ${(path.join(process.cwd()), 'no-route')}`);
    }));
});
