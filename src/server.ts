import { Server } from 'hapi';
import * as dotenv from 'dotenv';

import routes from './routes/v1';

import { connectDb } from './services/mongodb-service';
import swaggerPlulgin from './plugins/swagger';

enum ENV {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

const host = process.env.ENV === ENV.PRODUCTION ?
  'ec2-15-164-215-34.ap-northeast-2.compute.amazonaws.com' :
  'localhost';

try {
  if (process.env.ENV === ENV.DEVELOPMENT) {
    dotenv.config();
  }
} catch (e) {
  console.error(e);
}

// create a server with a host and port
const server: Server = new Server({
  host,
  port: process.env.PORT || 3001,
  routes: {
    cors: {
      origin: ["*"],
    },
  }
});
// add the route
server.route(routes);

// start the server
async function startServer(): Promise<Server> {
  try {
    // Register plugins & Swagger
    await server.register([
      require('@hapi/inert'),
      require('@hapi/vision'),
      swaggerPlulgin,
    ]);

    await server.start();

    await connectDb();

    return server;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

export default startServer;
