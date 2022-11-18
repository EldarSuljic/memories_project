import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

    //seting out our router
const router = express.Router();
    //now we can start adding our routes
router.get('/', getPosts);
router.post('/', createPost);
    //patch is used for updating existing documents
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


export default router;