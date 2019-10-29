# README
### Introduction
The backend supports two main tasks:
1. CRUD for User `/api/v1/users`
2. CRUD for Hobby `/api/v1/hobbies`

#### Demo
- Live at 
http://ec2-15-164-215-34.ap-northeast-2.compute.amazonaws.com:3001

#### Scripts
- `yarn`
- `yarn ts:c`
- `yarn start`
- `yarn lint`
- `yarn test`

#### Implementation
- Swagger docs
- Restful API for User & Hobby
- Functional test. Tests in `/tests/functional-routes/**`
- Unit test. Tests in `/tests/unit/**`

#### Tech stack
- NodeJS, Hapi framework v.18
- Typescript
- MongoDB (free/test from clever-cloud.com), Mongoose. Collection: User & Hobby.
- CORS, Routes, payload validation (joi)
- hapi-swagger
- es-lint (for both Typescript & JavaScript)
- Testing with Mocha & Chai
- MVC model with below structure
```
├── src
│   ├── constants          // Default data and configurations
│   ├── controllers
│   │   └── api            // Controllers
│   ├── models             // All mongoose models are defined here
│   ├── plugins            // Plugins, i.e., Swagger
│   ├── routes             // All app routes are defined here
│   │   └── v1             // RESTAPI routes for version 1
│   ├── services           // Helpers, services, i.e., Create Database connection.
│   └── tests              // Helpers, services, i.e., Create Database connection.
|       ├── functional-routes     // Tests for API requests
|       └── unit                  // Tests for Models/Controllers
├── dist                   // Compiled .js files for deployment from .ts
├── node_modules           // installed packages
├── .env                   // dotenv configuration
├── .eslintrc              // Define eslint rules
├── .gitignore             // standard git ignore file
├── package.json           // scripts & packages
├── README.md              // README
└── yarn.lock              // Contains all app configurations
```

#### Current configs
- CORS allows all-traffic
- Whitelist all hostnames

#### How to Deploy
- Environment: AWS EC2 Ubuntu 18 LTS
- Set Environment variables for
```
ENV=production
PORT={YOUR_BACKEND_PORT}
DB_USER={YOUR_MONGO_DB_USER}
DB_PASS={YOUR_MONGO_DB_PASSWORD}
DB_HOST={YOUR_MONGO_DB_HOST}
DB_PORT={YOUR_MONGO_DB_PORT}
DB_NAME={YOUR_MONGO_DB_NAME}
```
- Install required packages `yarn`
- Compile the source code from Typescript to Javascript `yarn ts:c`
- Start the server `yarn start`
- You may run the server with `pm2` if directly deploy to an EC2 (like this Demo)