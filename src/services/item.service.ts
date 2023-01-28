import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

//funcion que recibe los datos del controller para insertarlos y guardarlos en la base de datos y retornarlos
const insertCar = async (item: Car) => {
  return await ItemModel.create(item);
};

const getCars = async () => {
  return await ItemModel.find({});
};

const getCar = async (id: string) => {
  return await ItemModel.find({ _id: id });
};

const updateCar = async (id: string, data: Car) => {
  return await ItemModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true } // para retornar el obj actualizado
  );
};

const deleteCar = async (id: string) => {
  return await ItemModel.find({ _id: id });
};

export {
  getCar,
  getCars,
  insertCar,
  updateCar,
  deleteCar,
}