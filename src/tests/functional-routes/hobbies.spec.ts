import * as chai from 'chai';
import 'mocha';
import { Server } from 'hapi';

import { API_V1 } from '../../constants/data';

import startServer from '../../server';

const expect = chai.expect;

describe('Hobbies API Request', () => {
  let app: Server;

  before(async () => {
    app = await startServer();
  });

  it('expect create and delete hobbies successfully', async () => {
    // Create a Dummy User
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
    const userId = res.result['_id'];

    // Create a Dummy Hobby
    res = await app.inject({
      method: 'POST',
      url: `${API_V1}/hobbies`,
      payload: {
        name: 'DUMMY-HOBBY-FOR-TEST',
        userId,
        passionLevel: 3,
        year: 2018,
      },
    });
    expect(res.statusCode).to.equal(200);
    const hobbyId = res.result['_id'];

    // Delete the Dummy Hobby
    res = await app.inject({
      method: 'DELETE',
      url: `${API_V1}/hobbies/${hobbyId}`,
    });
    expect(res.statusCode).to.equal(200);

    // Delete the Dummy User
    res = await app.inject({
      method: 'DELETE',
      url: `${API_V1}/users/${userId}`,
    });
    expect(res.statusCode).to.equal(200);
  });
});
