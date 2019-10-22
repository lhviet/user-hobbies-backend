import * as mongoose from 'mongoose';

import { DEFAULT_AVATAR } from '../constants/data';

/**
 * User Schema
 */
export const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    trim: true,
    required: true,
  },
  avatarUrl: {
    type: mongoose.Schema.Types.String,
    trim: true,
    default: DEFAULT_AVATAR,
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } ,
});

export default mongoose.model('User', UserSchema);