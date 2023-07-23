import { Schema, model, models } from 'mongoose';
// import { handleSaveErrors } from '../utils/mongo/handleSaveErrors';

const userSchema = new Schema(
  {
    userID: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'Email is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Email is required'],
    },

    userName: {
      type: String,
      required: [true, 'Email is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

// userSchema.post('save', handleSaveErrors);

export const User = models.users || model('users', userSchema);
