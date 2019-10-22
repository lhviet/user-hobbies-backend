import * as mongoose from 'mongoose';

/**
 * User Schema
 */
export const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    trim: true,
    required: true,
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } ,
});

export default mongoose.model('User', UserSchema);