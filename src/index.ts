import * as dotenv from 'dotenv';
import { Server } from 'hapi';

import routes from './routes/v1';

import { connectDb } from './services/mongodb-service';
import swaggerPlulgin from './plugins/swagger';

const result = dotenv.config();
if (result.error) {
  throw result.error
}
const host = process.env.ENV === 'production' ?
  'localhost' :
  'localhost';

// create a server with a host and port
const server: Server = new Server({
  host,
  port: 3000
});
// add the route
server.route(routes);

// start the server
async function start() {
  try {
    // Register plugins & Swagger
    await server.register([
      require('@hapi/inert'),
      require('@hapi/vision'),
      swaggerPlulgin,
    ]);

    await server.start();

    await connectDb();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

// don't forget to call start
start();