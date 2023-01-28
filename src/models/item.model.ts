import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
  {
    year: {
      type: Number,
      remove: true,
    },
    color: {
      type: String,
      remove: true,
    },
    price: {
      type: Number,
      remove: true,
    },
    description: {
      type: String,
      remove: true,
    },
    motor: {
      type: String,
      remove: true,
      enum: ['gasoline', 'electric']
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;