const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./'));

app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {    
  console.log(`StarAtlas server listening at http://localhost:${port}`);
});