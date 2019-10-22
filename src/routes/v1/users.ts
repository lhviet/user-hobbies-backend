import * as joi from 'joi';

import { API_V1, DEFAULT_AVATAR } from '../../constants/data';

import * as user from '../../controllers/api/user';

const routes = [
  {
    method: 'GET',
    path: `${API_V1}/users`,
    options: {
      handler: user.getUsers,
      // Swagger
      tags: ['api', 'users', 'list', 'get'],
      validate: {
        query: {
          off: joi.number()
            .optional()
            .default(0)
            .description('The offset to query the User item'),
          lim: joi.number()
            .optional()
            .default(30)
            .description('The count/limit to query the User item'),
        }
      },
    },
  },
  {
    method: 'POST',
    path: `${API_V1}/users`,
    options: {
      handler: user.createUser,
      // Swagger
      tags: ['api', 'users', 'create', 'post'],
      validate: {
        payload: {
          name: joi.string()
            .required()
            .description('The Name for the User item'),
          avatarUrl: joi.string()
            .optional()
            .default(DEFAULT_AVATAR)
            .description('The Avatar URL for the User item'),
        }
      },
    },
  },
  {
    method: ['PUT', 'PATCH'],
    path: `${API_V1}/users/{id}`,
    options: {
      handler: user.updateUser,
      // Swagger
      tags: ['api', 'users', 'update', 'modify', 'put', 'patch'],
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the User item'),
        },
        payload: {
          name: joi.string()
            .optional()
            .description('The Name for the User item'),
          avatarUrl: joi.string()
            .optional()
            .default(DEFAULT_AVATAR)
            .description('The Avatar URL for the User item'),
        }
      },
    },
  },
  {
    method: 'DELETE',
    path: `${API_V1}/users/{id}`,
    options: {
      handler: user.deleteUser,
      // Swagger
      tags: ['api', 'users', 'delete', 'remove'],
      description: 'Delete User and the dependent Hobbies',
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the User item'),
        }
      },
    },
  },
  {
    method: 'GET',
    path: `${API_V1}/users/{id}/hobbies`,
    options: {
      handler: user.getHobbies,
      // Swagger
      tags: ['api', 'users', 'list', 'hobbies', 'get'],
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the User item'),
        }
      },
    },
  },
];


export default routes;
