import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Hi this description!!',
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = model('users', UserSchema);
export default UserModel;