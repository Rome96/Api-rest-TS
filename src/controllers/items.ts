import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { getCar, getCars, insertCar, deleteCar, updateCar } from '../services/item.service';

//un controller forma la orquestacion entre infrastructura y logica de negocio.

const getItem = async ({params}: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR GET ITEM');
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR GET ITEMS');
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  // const { name } = req.body;
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR POST ITEM', error);
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params;
    console.log("ID OME", id)
    const response = await updateCar(id, body);
    console.log({response});
    res.send(response);
  } catch (error) {
    handleHttp(res, 'ERROR UPDATE ITEM')
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR DELETE ITEM')
  }
};

export {
  getItem,
  postItem,
  getItems,
  updateItem,
  deleteItem
}

