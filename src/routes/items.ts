import {Request, Response, Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items';

const router = Router();

// http://localhost:3003/item
router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/', deleteItem)

 
export {router}