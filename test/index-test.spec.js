
const route = require('../src/index.js');

describe('.pathAbsolute', () => {
  it('retorna true si la ruta es absoluta', () => {
    expect(route.pathAbsolute('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(route.pathAbsolute('./README.md')).toBe(false);
  });
});

describe('resolveToAbsolute', () => {
  it('resuelve una ruta relativa a absoluta', () => {
    expect(route.resolveToAbsolute('./README.md')).toBe('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md');
  });
});

describe('identifyFile', () => {
  it('identifica si la ruta recibida es un archivo', () => {
    expect(route.identifyFile('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
});

describe('thisIsMd', () => {
  it('Debería retornar function', () => {
    expect(typeof route.thisIsMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json')).toBe(false);
  });
  it('Debería retornar true si el file tiene extensión MD', () => {
    expect(route.thisIsMd('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
});
