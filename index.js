const express = require('express');
const app = express();
const morgan = require('morgan');
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bek' },
  { id: 3, name: 'Chris' },
];

app.use(morgan('dev'));

app.get('/users', function (req, res) {
  res.send(users);
});

app.post('/users', function (req, res) {
  res.send('Create User!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;

//-------------------------------
// const express = require('express');
// const app = express();

// function commonmw(req, res, next) {
//   console.log('commonmw');
//   next(new Error('error'));
// }

// function errormw(err, req, res, next) {
//   console.log(err.message);
//   // 에러를 처리하거나
//   // 에러를 넘기거나
//   next();
// }

// app.use(commonmw);
// app.use(errormw);

// app.listen(3000, () => {
//   console.log('Server is running');
// });

//-------------------------------
// const morgan = require('morgan');

// function logger(req, res, next) {
//   console.log("I'm logger ");

//   next(); // next 함수를 호출해야 다음 로직을 수행
// }

// function logger2(req, res, next) {
//   console.log("I'm logger ");

//   next(); // next 함수를 호출해야 다음 로직을 수행
// }

// app.use(logger);
// app.use(logger2);
// app.use(morgan('dev'));
//-------------------------------
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
