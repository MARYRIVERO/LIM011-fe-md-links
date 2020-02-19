const functions = require('../src/mdLinks.js');

describe('mdLinks', () => {
  it('Debería retornar function', () => {
    expect(typeof functions.mdLinks).toBe('function');
  });
  it('Debería buscar los links presentes', () => {
    expect(functions.mdLinks('/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md', false)).toEqual([
      {
        href: 'https://nodejs.org/es/',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        text: 'Node.js',
      },

      {
        href: 'https://developers.google.com/v8/',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        text: 'motor de JavaScript V8 de Chrome',
      },
      {
        href: 'https://nodefdjs.org/es/',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        text: 'Noesuunlink.js',
      },
    ]);
  });

  it('Debería buscar los links presentes', () => {
    expect(functions.mdLinks('/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md', true)).toEqual([

      {
        href: 'https://nodejs.org/es/',
        text: 'Node.js',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        status: 200,
        statusText: 'OK',
      },
      {
        href: 'https://developers.google.com/v8/',
        text: 'motor de JavaScript V8 de Chrome',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        status: 200,
        statusText: 'OK',
      },
      {
        href: 'https://nodefdjs.org/es/',
        text: 'Noesuunlink.js',
        path: '/home/terislos/Proyecto nuevo/LIM011-fe-md-links/test/pruebas/node.md',
        status: 'ERR',
        statusText: 'FAIL',
      },
    ]);
  });
});
