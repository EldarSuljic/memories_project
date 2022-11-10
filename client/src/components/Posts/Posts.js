import React from 'react';
import Post from './Post/Post';

import { useSelector } from 'react-redux';
//import useStyles from '/home/eldar/Desktop/memories_project/memories_project/client/src/style.js';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);
    
    return (
        //<> are React fragments so we can add multiple thingsin there
    <>
        <h1>POSTS</h1>
        <Post />
        <Post />
    </>
    );
}

export default Posts;