import express from 'express';

//seting out our router
const router = express.Router();
//now we can start adding our routes
router.get('/', (req, res) => {
    res.send('THIS WORKS!');
});
//callback funciton which is going to be executed whenever user visits this route

export default router;