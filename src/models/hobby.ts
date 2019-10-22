import * as mongoose from 'mongoose';

import { User } from './index';

/**
 * Hobby Schema
 */
export const HobbySchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    trim: true,
  },
  passionLevel: {
    type: mongoose.Schema.Types.Number,
    required: true,
    default: 1,
    min: 1,
    max: 4,
  },
  year: {
    type: mongoose.Schema.Types.Number,
    required: true,
    default: 2019
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } ,
});

export default mongoose.model('Hobby', HobbySchema);