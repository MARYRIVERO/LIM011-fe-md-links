
const functions = require('../src/index.js');

describe('.pathAbsolute', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.pathAbsolute).toBe('function');
  });
  it('retorna true si la ruta es absoluta', () => {
    expect(functions.pathAbsolute('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(functions.pathAbsolute('./README.md')).toBe(false);
  });
});

describe('resolveToAbsolute', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.resolveToAbsolute).toBe('function');
  });
  it('resuelve una ruta relativa a absoluta', () => {
    expect(functions.resolveToAbsolute('./README.md')).toBe('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md');
  });
});

describe('identifyFile', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.identifyFile).toBe('function');
  });
  it('identifica si la ruta recibida es un archivo', () => {
    expect(functions.identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
  it('identifica si la ruta recibida no es un archivo', () => {
    expect(functions.identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links')).toBe(false);
  });
});

describe('verifityFiles', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.verifityFiles).toBe('function');
  });
  it('Debería retornar un array de archivos', () => {
    expect(functions.verifityFiles('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json')).toStrictEqual(['/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json']);
  });
});

describe('thisIsMd', () => {
  const arrayInput = '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas';
  const arrayOutput = ['/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/prueba.md'];

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
    expect(functions.readArchive('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/prueba.md')).toStrictEqual('esto es un texto');
  });
});
