// const fetchMock = require('fetch-mock');
const path = require('path');

const functions = require('../src/mdLinks.js');

// jest.mock('node-fetch);

const output = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
  },
  {
    href: 'https://nodejs.org/es/.co',
    text: 'Node.js',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
  },
  {
    href: 'https://nodefdjs.org/es/',
    text: 'Noesuunlink.js',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
  },
];
const output2 = [
  {
    href: 'https://nodejs.org/es/',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
    status: 200,
    statusText: 'OK',
    text: 'Node.js',
  },

  {
    href: 'https://nodejs.org/es/.co',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
    status: 404,
    statusText: 'FAIL',
    text: 'Node.js',
  },
  {
    href: 'https://nodefdjs.org/es/',
    path: path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'),
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
    functions.mdLinks(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'), { validate: false }).then((response) => {
      expect(response).toStrictEqual(output);
    });
  });

  it('Debería retornar el link del primer elemento del array de links', (done) => {
    functions.mdLinks(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'), { validate: true }).then((response) => {
      expect(response).toStrictEqual(output2);
      done();
    });
  });

  it('should show a message: No se encuentra la ruta', () => functions.mdLinks('no-route')
    .catch((err) => {
      expect(err.message).toEqual(`No se encuentra la ruta: ${path.join(process.cwd(), 'no-route')}`);
    }));
});
