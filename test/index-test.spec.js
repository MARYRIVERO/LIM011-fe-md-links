
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


describe('verifityFiles', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.verifityFiles).toBe('function');
  });
  it('Debería retornar si el file no tiene extensión MD', () => {
    expect(functions.verifityFiles('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json')).toEqual(['/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/package.json']);
  });
  it('Debería retornar si el file no tiene extensión MD', () => {
    expect(functions.verifityFiles('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/')).toEqual(['/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/documents.js', '/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/prueba.md']);
  });
});
