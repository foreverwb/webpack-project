if (typeof window === 'undefined') {
  global.window = {};
}
const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');
const tempalte = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
const mock = require('./mock.json')

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));

  app.get('/search', (req, res) => {
    const html = renderMarkup(renderToString(SSR));
    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.log('Server is running on port: 3001');
  });
};

server(process.env.PORT || 3001);

const renderMarkup = (str) => {
  return tempalte
          .replace('<!--HTML_PLACEHOLDER-->', str)
          .replace('<!--INITIAL_MOCK_PLACEHOLDER-->', `<p>${mock.data.name}</p>`)
};