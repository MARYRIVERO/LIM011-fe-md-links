const path = require('path');

// const functionsMdlinks = require('../src/mdLinks.js');
const functionsCliMdlinks = require('../src/cliMdLinks.js');

const mdFile = path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md');
const relativePath = path.join('test', 'pruebas', 'readmefalse.md');


describe('cli mdlinks', () => {
  it('should show a message: El archivo o directorio no cuentiene links ', (done) => functionsCliMdlinks.cliMdLinks(path.join(process.cwd(), 'src'))
    .then((result) => {
      expect(result).toEqual('El archivo o directorio no contiene links');
      done();
    }));
  it('should return an string with the validation and status of the links', (done) => functionsCliMdlinks.cliMdLinks(mdFile, { validate: true, stats: true })
    .then((result) => {
      expect(result).toEqual('Total: 3\nUnique: 3\nBroken: 2');
      done();
    }));
  it('should return an string with the status of the links', (done) => functionsCliMdlinks.cliMdLinks(mdFile, { stats: true })
    .then((result) => {
      expect(result).toEqual('Total: 3\nUnique: 3');
      done();
    }));
  it('should return an string with validated links', (done) => functionsCliMdlinks.cliMdLinks(mdFile, { validate: true })
    .then((result) => {
      expect(result).toEqual(`${relativePath} https://nodejs.org/es/ OK 200 Node.js\n${relativePath} https://nodejs.org/es/.co FAIL 404 Node.js\n${relativePath} https://nodefdjs.org/es/ FAIL ERR Noesuunlink.js`);
      done();
    }));
  it('should return an string with the links', (done) => functionsCliMdlinks.cliMdLinks(mdFile)
    .then((result) => {
      expect(result).toEqual(`${relativePath} https://nodejs.org/es/ Node.js\n${relativePath} https://nodejs.org/es/.co Node.js\n${relativePath} https://nodefdjs.org/es/ roto`);
      done();
    }));
  it('should show a message: No se encuentra la ruta', (done) => functionsCliMdlinks.cliMdLinks('no-route')
    .catch((err) => {
      expect(err.message).toEqual(`No se encuentra la ruta: ${path.join(process.cwd(), 'no-route')}`);
      done();
    }));
});
