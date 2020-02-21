const path = require('path');
const validate = require('../src/validate.js');

const ruta = path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md');
const output = [
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
