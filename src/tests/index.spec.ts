import * as chai from 'chai';
import 'mocha';
import { Server } from 'hapi';

import startServer from '../server';

const expect = chai.expect;

describe('API Request', () => {
  let app: Server;

  before(async () => {
    app = await startServer();
  });

  it('expect return redirect', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/'
    });
    expect(res.statusCode).to.eql(302);
  });
});
