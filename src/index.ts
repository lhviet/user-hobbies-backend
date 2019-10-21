import { Server } from 'hapi';
import * as dotenv from 'dotenv';

import routes from './routes/v1';
import { connectDb } from './services/mongodb-service';

const result = dotenv.config();
if (result.error) {
  throw result.error
}

// create a server with a host and port
const server: Server = new Server({
  host: 'localhost',
  port: 3001
});

// add the route
server.route(routes);

// start the server
async function start() {
  try {
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