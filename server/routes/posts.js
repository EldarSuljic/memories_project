import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

//seting out our router
const router = express.Router();
//now we can start adding our routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);



export default router;