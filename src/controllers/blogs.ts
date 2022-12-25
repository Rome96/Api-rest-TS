import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

//un controller forma la orquestacion entre infrastructura y logica de negocio.

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR GET BLOG')
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR GET BLOGS')
  }
};

const postBlog = ({body}: Request, res: Response) => {
  // const { name } = req.body;
  try {
    console.log(body?.name);
    res.send(body);
  } catch (error) {
    handleHttp(res, 'ERROR POST BLOG')
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR UPDATE BLOG')
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR DELETE BLOG')
  }
};

export {
  getBlog,
  postBlog,
  getBlogs,
  updateBlog,
  deleteBlog
}

