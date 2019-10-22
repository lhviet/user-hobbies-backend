const swaggerPlulgin = {
  'plugin': require('hapi-swagger'),
  'options': {
    info: {
      title: 'Test API Documentation',
      version: '1.0.0',
    },
    tags: [
      {
        name: 'users',
        description: 'CRUD APIs for User',
      },
      {
        name: 'hobbies',
        description: 'CRUD APIs for Hobby',
      }
    ],
    basePath: '/api/v1/',
    documentationPath: '/docs',
    pathPrefixSize: 3,
    sortEndpoints: 'ordered',
  }
};

export default swaggerPlulgin