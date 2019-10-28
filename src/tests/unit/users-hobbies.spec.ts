import * as chai from 'chai';
import 'mocha';
import { Server } from 'hapi';

import { DEFAULT_AVATAR } from '../../constants/data';

import startServer from '../../server';

import { User } from '../../models';

const expect = chai.expect;

describe('Users-Hobbies Controllers', () => {
  let app: Server;

  before(async () => {
    app = await startServer();
  });

  it('expect create & delete new users successfully', async () => {
    const user1 = await new User({ name: 'DUMMY-USER-1', avatarUrl: DEFAULT_AVATAR }).save();
    const user2 = await new User({ name: 'DUMMY-USER-2', avatarUrl: DEFAULT_AVATAR }).save();
    expect(user1).to.have.property('_id');
    expect(user2).to.have.property('_id');
    const deletedUser1 = await User.findByIdAndDelete(user1['_id']);
    const deletedUser2 = await User.findByIdAndDelete(user2['_id']);
    expect(deletedUser1['_id'].toString()).to.be.eq(user1['_id'].toString());
    expect(deletedUser2['_id'].toString()).to.be.eq(user2['_id'].toString());
  });

});
