import {Request, Response, Router } from 'express';

const router = Router();

// http://localhost:3003/item
router.get('/', (req: Request, res: Response) => {
  res.send({data: 'Aqui van los models'})
})

export {router}