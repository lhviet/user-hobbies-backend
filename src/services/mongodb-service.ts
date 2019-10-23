import * as mongoose from 'mongoose';

import mongodb from '../constants/mongodb';

export async function connectDb(): Promise<void> {
  try {
    await mongoose.connect(mongodb.getURI(), { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (e) {
    console.log('Failed to connect to MongoDB', e)
  }

  const db = mongoose.connection;
  // When the connection is connected
  db.on('connected', () => {
    console.log('Mongo Database connected');
  });
  // When the connection is disconnected
  db.on('disconnected', () => {
    console.log(' Mongo Database disconnected');
  });
}
