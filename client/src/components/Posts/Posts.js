import React from 'react';
import Post from './Post/Post';

import { useSelector } from 'react-redux';
//import useStyles from '/home/eldar/Desktop/memories_project/memories_project/client/src/style.js';
import useStyles from './styles';

const Posts = () => {
    //fetching the data in this component, after all that Redux data swapping
    const posts = useSelector((state) => state.posts);//we again initialize it as a hook, as a parametar in callback function,
    //we get acces to that whole global redux store or state and then we can immediately return state.posts (posts is that reducer)
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