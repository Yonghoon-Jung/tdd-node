const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bek' },
  { id: 3, name: 'Chris' },
];

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  req.query.limit = req.query.limit || 10;

  const limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  res.send(users.slice(0, limit));
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) return res.status(400).end();

  const user = users.filter((user) => user.id === id)[0];

  if (!user) return res.status(404).end();

  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) return res.status(400).end();

  const filteredUsers = users.filter((user) => user.id !== id);

  res.status(204).end();
});

app.post('/users', (req, res) => {
  const name = req.body.name;

  if (!name) return res.status(400).end();

  const isConflict = users.filter((user) => user.name === name).length;

  if (isConflict) return res.status(409).end();

  const id = Date.now();
  const user = { id, name };

  users.push(user);

  res.status(201).send(user);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const name = req.body.name;

  const user = users.filter((user) => user.id === id)[0];
  user.name = name;

  res.json(user);
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
