import { API_V1 } from '../../constants/data';

import * as hobby from '../../controllers/api/hobby';

const routes = [
  {
    method: 'GET',
    path: `${API_V1}/hobbies/{id}`,
    handler: hobby.getHobby
  },
  {
    method: 'POST',
    path: `${API_V1}/hobbies`,
    handler: hobby.createHobby
  },
  {
    method: ['PUT', 'PATCH'],
    path: `${API_V1}/hobbies/{id}`,
    handler: hobby.updateHobby
  },
  {
    method: 'DELETE',
    path: `${API_V1}/hobbies/{id}`,
    handler: hobby.deleteHobby
  },
];

export default routes;