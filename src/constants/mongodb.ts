const PORT = 27017;
const DB_NAME = 'bl3oq253ad6his7';

export default {
  DB_NAME,
  PORT,

  getURI: () => `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${PORT}/${DB_NAME}`,
};
