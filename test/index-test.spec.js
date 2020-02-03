
const functions = require('../src/index.js');

describe('.pathAbsolute', () => {
  it('retorna true si la ruta es absoluta', () => {
    expect(functions.pathAbsolute('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(functions.pathAbsolute('./README.md')).toBe(false);
  });
});

describe('resolveToAbsolute', () => {
  it('resuelve una ruta relativa a absoluta', () => {
    expect(functions.resolveToAbsolute('./README.md')).toBe('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md');
  });
});

describe('identifyFile', () => {
  it('identifica si la ruta recibida es un archivo', () => {
    expect(functions.identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
});

describe('thisIsMd', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.thisIsMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(functions.thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json')).toBe(false);
  });
  it('Debería retornar true si el file tiene extensión MD', () => {
    expect(functions.thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
});
