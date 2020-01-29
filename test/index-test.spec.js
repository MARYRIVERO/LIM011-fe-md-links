const functionsIndex = require('../src/index.js');

describe('isAbsolute', () => {
  it('retorna true si la ruta es absoluta', () => {
    expect(functionsIndex.isAbsolute('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(functionsIndex.isAbsolute('./README.md')).toBe(false);
  });
});

describe('convertirAbsoluta', () => {
  it('resuelve una ruta relativa a absoluta', () => {
    expect(functionsIndex.convertirAbsoluta('./README.md')).toBe('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md');
  });
});
