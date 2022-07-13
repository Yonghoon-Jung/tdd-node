const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then((result) => {
  console.log('sync database');
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
});
