import express from 'express';

import { getPosts } from '../controllers/posts.js';

//seting out our router
const router = express.Router();
//now we can start adding our routes
router.get('/', getPosts);
//callback funciton which is going to be executed whenever user visits this route

export default router;