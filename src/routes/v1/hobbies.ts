import {API_V1, DEFAULT_AVATAR} from '../../constants/data';

import * as hobby from '../../controllers/api/hobby';
import * as joi from 'joi';

const routes = [
  {
    method: 'GET',
    path: `${API_V1}/hobbies/{id}`,
    options: {
      handler: hobby.getHobby,
      // Swagger
      tags: ['api', 'hobbies', 'get'],
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the Hobby item'),
        }
      },
    },
  },
  {
    method: 'POST',
    path: `${API_V1}/hobbies`,
    options: {
      handler: hobby.createHobby,
      // Swagger
      tags: ['api', 'hobbies', 'create', 'post'],
      validate: {
        payload: {
          name: joi.string()
            .required()
            .description('The Name for the Hobby item'),
          passionLevel: joi.number()
            .required()
            .min(1)
            .max(4)
            .default(3)
            .description('The Passion Level for the Hobby item'),
          year: joi.number()
            .required()
            .min(1900)
            .max(2020)
            .default(2019)
            .description('The Year Since for the Hobby item'),
          userId: joi.string()
            .required()
            .description('The User for the Hobby item'),
        }
      },
    },
  },
  {
    method: ['PUT', 'PATCH'],
    path: `${API_V1}/hobbies/{id}`,
    options: {
      handler: hobby.updateHobby,
      // Swagger
      tags: ['api', 'hobbies', 'update', 'modify', 'put', 'patch'],
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the Hobby item'),
        },
        payload: {
          name: joi.string()
            .optional()
            .description('The new Name for the Hobby item'),
          passionLevel: joi.number()
            .optional()
            .min(1)
            .max(4)
            .default(3)
            .description('The new Passion Level for the Hobby item'),
          year: joi.number()
            .optional()
            .min(1900)
            .max(2020)
            .default(2019)
            .description('The new Year Since for the Hobby item'),
        }
      },
    },
  },
  {
    method: 'DELETE',
    path: `${API_V1}/hobbies/{id}`,
    options: {
      handler: hobby.deleteHobby,
      // Swagger
      tags: ['api', 'hobbies', 'delete', 'remove'],
      validate: {
        params: {
          id: joi.string()
            .required()
            .description('The id for the Hobby item'),
        }
      },
    },
  },
];

export default routes;