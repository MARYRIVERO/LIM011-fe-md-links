const path = require('path');
const stats = require('../src/stats.js');

const mdFile = path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md');
const relativePath = path.join('test', 'pruebas', 'readmefalse.md');
// /home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/readmefalse.md
const array = [
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

describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof stats.brokenLinks).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links rotos', (done) => {
    expect(stats.brokenLinks(array)).toBe(2);
    done();
  });
});

describe('Broken links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof stats.uniquesLinks).toBe('function');
    done();
  });
  it('Debería retornar la cantidad de links unicos', (done) => {
    expect(stats.uniquesLinks(array)).toBe(3);
    done();
  });
});

describe('optionStats', () => {
  it('Should return links statistics in a string', (done) => stats.optionStats(mdFile)
    .then((result) => {
      expect(result).toEqual('Total: 3\nUnique: 3');
      done();
    }));
});

describe('option validate and stats', () => {
  it('Should return the links statistics and links validations in a string', (done) => stats.optionsValidateStats(mdFile)
    .then((result) => {
      expect(result).toEqual('Total: 3\nUnique: 3\nBroken: 2');
      done();
    }));
});

describe('option validate', () => {
  it('Should return the validated links', (done) => stats.optionValidate(mdFile)
    .then((result) => {
      expect(result).toEqual(`${relativePath} https://nodejs.org/es/ OK 200 Node.js\n${relativePath} https://nodejs.org/es/.co FAIL 404 Node.js\n${relativePath} https://nodefdjs.org/es/ FAIL ERR Noesuunlink.js`);
      done();
    }));
});
