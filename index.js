// code away!
const server = require('./server');
let PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log('\n* Server Running on http://localhost:4000 *\n');
});
