import * as _ from 'lodash';

import { API_V1 } from '../../constants/data';

import users from './users';
import hobbies from './hobbies';

const routes = [
  {
    method: 'GET',
    path: API_V1,
    handler: async () => 'Welcome to the User-Hobbies API v1'
  }
];

export default _.concat(routes, users, hobbies);
