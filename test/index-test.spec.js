const path = require('path');
const fetchMock = require('fetch-mock');
const functions = require('../src/index.js');


fetchMock.mock('*', 200);

describe('.pathAbsolute', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.pathAbsolute).toBe('function');
  });
  it('retorna true si la ruta es absoluta', () => {
    expect(functions.pathAbsolute(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'))).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(functions.pathAbsolute('test/pruebas/readmefalse.md')).toBe(false);
  });
});

describe('resolveToAbsolute', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.resolveToAbsolute).toBe('function');
  });
  it('resuelve una ruta relativa a absoluta', () => {
    expect(functions.resolveToAbsolute('test/pruebas/readmefalse.md')).toBe(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'));
  });
});

describe('identifyFile', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.identifyFile).toBe('function');
  });
  it('identifica si la ruta recibida es un archivo', () => {
    expect(functions.identifyFile(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'))).toBe(true);
  });
  it('identifica si la ruta recibida no es un archivo', () => {
    expect(functions.identifyFile(path.join(process.cwd(), 'test', 'pruebas'))).toBe(false);
  });
});

describe('verifityFiles', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.verifityFiles).toBe('function');
  });
  it('Debería retornar un array de archivos', () => {
    expect(functions.verifityFiles(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'))).toStrictEqual([(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'))]);
  });
});

describe('thisIsMd', () => {
  const arrayInput = path.join(process.cwd(), 'test', 'pruebas');
  const arrayOutput = [
    path.join(process.cwd(), 'test', 'pruebas', 'node.md'),
    path.join(process.cwd(), 'test', 'pruebas', 'prueba.md'),
    path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md')];

  it('Debería retornar function', () => {
    expect(typeof functions.thisIsMd).toBe('function');
  });
  it('Debería retornar un array de archivos .md', () => {
    expect(functions.thisIsMd(arrayInput)).toStrictEqual(arrayOutput);
  });
});

describe('readArchive', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.readArchive).toBe('function');
  });
  it('Debería leer un archivo', () => {
    expect(functions.readArchive(path.join(process.cwd(), 'test', 'pruebas', 'prueba.md'))).toStrictEqual('esto es un texto');
  });
});
describe('saveLinksMds', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.saveLinksMds).toBe('function');
  });

  it('Debería buscar los links presentes', () => {
    expect(functions.saveLinksMds(path.join(process.cwd(), 'test', 'pruebas', 'readmefalse.md'))).toStrictEqual([
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
    ]);
  });
});
