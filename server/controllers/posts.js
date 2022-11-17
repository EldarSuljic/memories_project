import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//all the hendlers for the routes are going to be here so it is more clear and more understadable

//callback funciton which is going to be executed whenever user visits this route
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find(); //find is asynchronous action(takes time to find something) thats why we add await and async on fuction
        res.status(200).json(postMessages); //return this if everything works (json will be an array of all messages that we have)

    } catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body; //with post requests you have access to request.body
    const newPost = new PostMessage(post); //creating a new post

    try{
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
 }

 export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: 'Post deleted successfully'});

 }

 export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    //finding post that we are looking for
    const post = await PostMessage.findById(_id); //this will return us a post
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1}, { new: true});

    res.json(updatedPost);
 }