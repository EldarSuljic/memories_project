//using axios for makinkg api calss
import axios from 'axios';

const url = 'http://localhost:5000/posts'; //url pointing to backend route

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatePost);