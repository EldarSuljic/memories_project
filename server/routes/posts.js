import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

//seting out our router
const router = express.Router();
//now we can start adding our routes
router.get('/', getPosts);
router.post('/', createPost);



export default router;