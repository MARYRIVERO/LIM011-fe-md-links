const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

fetchMock.mock('https://nodejs.org/es/', 200);
fetchMock.mock('https://nodejs.org/es/.co', 404);
fetchMock.mock('https://nodefdjs.org/es/', {
  throws: new TypeError('Failed to fetch'),
});

module.exports = fetchMock;
