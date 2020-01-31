const functionsIndex = require('../src/index.js');
const route = require('../src/index.js');
const path = require('../src/index.js');

describe('isAbsolute', () => {
  it('retorna true si la ruta es absoluta', () => {
    expect(functionsIndex.isAbsolute('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });

  it('retorna false si la ruta relativa', () => {
    expect(functionsIndex.isAbsolute('./README.md')).toBe(false);
  });
});

describe('convertToAbsolute', () => {
  it('resuelve una ruta relativa a absoluta', () => {
    expect(functionsIndex.convertToAbsolute('./README.md')).toBe('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md');
  });
});

describe('isArchive', () => {
  it('identifica si la ruta recibida es un archivo', () => {
    expect(functionsIndex.isArchive('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/README.md')).toBe(true);
  });
  it('identifica si la ruta recibida es un archivo', () => {
    expect(functionsIndex.isArchive('/home/laboratoria/Proyecto nuevo/LIM011-fe-md-links/ ')).toBe(false);
  });
});

describe('isArchiveMd', () => {
  it('Debería retornar function', () => {
    expect(typeof route.isArchiveMd).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.isArchiveMd(path.join(process.cwd(), 'src'))).toBe(false);
  });
  it('Debería retornar true si el file tiene extensión MD', () => {
    expect(route.isArchiveMd(path.join(process.cwd(), 'README.md'))).toBe(true);
  });
});
