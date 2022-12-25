import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

//un controller forma la orquestacion entre infrastructura y logica de negocio.

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR GET ITEM')
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR GET ITEMS')
  }
};

const postItem = ({body}: Request, res: Response) => {
  // const { name } = req.body;
  try {
    console.log(body?.name);
    res.send(body);
  } catch (error) {
    handleHttp(res, 'ERROR POST ITEM')
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
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

