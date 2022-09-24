const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);

// simulate an error from the backend
// server.use('/messages', function (req, res, next) {
//     res.sendStatus(500);
// });

// simulate delay in response
// server.use('/messages', function (req, res, next) {
//   setTimeout(next, 1000);
// });

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
