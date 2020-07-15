const server = require('./api/server');

const port = process.env.PORT || 5300;

server.listen(port, () =>
  console.log(`\n** Running on port ${port} **\n`),
);
