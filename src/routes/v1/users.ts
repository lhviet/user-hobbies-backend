import { API_V1 } from '../../constants/data';

import * as user from '../../controllers/api/user';

const routes = [
  {
    method: 'GET',
    path: `${API_V1}/users`,
    handler: user.getUsers
  },
  {
    method: 'POST',
    path: `${API_V1}/users`,
    handler: user.createUser
  },
  {
    method: ['PUT', 'PATCH'],
    path: `${API_V1}/users/{id}`,
    handler: user.updateUser
  },
  {
    method: 'DELETE',
    path: `${API_V1}/users/{id}`,
    handler: user.deleteUser
  },
  {
    method: 'GET',
    path: `${API_V1}/users/{id}/hobbies`,
    handler: user.getHobbies
  }
];


export default routes;
