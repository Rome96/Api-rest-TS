import { Router } from 'express';
import { deleteBlog, getBlog, postBlog, updateBlog } from '../controllers/blogs';

const router = Router();
router.get('/', getBlog)
router.get('/:id', getBlog)
router.post('/', postBlog)
router.put('/', updateBlog)
router.delete('/', deleteBlog)


export { router }