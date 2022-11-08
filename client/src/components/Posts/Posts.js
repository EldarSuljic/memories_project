import React from 'react';
import Post from './Post/Post.js';
import useStyles from '/home/eldar/Desktop/memories_project/memories_project/client/src/style.js';

const Posts = () => {
    const classes = useStyles();
    return (
    <>
        <h1 className={classes.heading}>POSTS</h1>
        <Post />
        <Post />
    </>
    );
}

export default Posts;