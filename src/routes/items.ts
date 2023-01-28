import { Router } from 'express';
import { LogMiddleware } from '../middleware/log';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items';

const router = Router();

// http://localhost:3003/item
router.get('/', LogMiddleware, getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

 
export {router}