import * as _ from 'lodash';

import { API_V1 } from '../../constants/data';

import users from './users';
import hobbies from './hobbies';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => reply.redirect('/docs'),
  },
  {
    method: 'GET',
    path: API_V1,
    handler: (req, reply) => reply.redirect('/docs'),
  }
];

export default _.concat(
  routes,
  users as any,
  hobbies as any,
);
