import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
  {
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    motor: {
      type: String,
      required: true,
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