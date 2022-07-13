const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log("I'm logger ");

  next(); // next 함수를 호출해야 다음 로직을 수행
}

app.use(logger);

app.listen(3000, () => {
  console.log('Server is running');
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
//   } else if (req.url === '/users') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('User List');
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
