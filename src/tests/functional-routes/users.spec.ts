import * as chai from 'chai';
import 'mocha';
import { Server } from 'hapi';

import { API_V1 } from '../../constants/data';

import startServer from '../../server';

const expect = chai.expect;

describe('Users API Request', () => {
  // make API call to self to test functionality end-to-end
  let app: Server;

  before(async () => {
    app = await startServer();
  });

  it('expect to get users successfully', async () => {
    // make API call to self to test functionality end-to-end
    const res = await app.inject({
      method: 'GET',
      url: `${API_V1}/users`
    });
    expect(res.statusCode).to.equal(200);
  });

  it('expect to create & delete user successfully', async () => {
    const userName = 'DUMMY-USER-FOR-TEST';
    let res = await app.inject({
      method: 'POST',
      url: `${API_V1}/users`,
      payload: {
        name: userName,
      },
    });
    expect(res.statusCode).to.equal(200);
    expect(res.result['name']).to.eq(userName);
    const id = res.result['_id'];

    res = await app.inject({
      method: 'DELETE',
      url: `${API_V1}/users/${id}`,
    });
    expect(res.statusCode).to.equal(200);
  });
});
