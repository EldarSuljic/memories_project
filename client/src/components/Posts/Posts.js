import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import Post from './Post/Post';

import { useSelector } from 'react-redux';
//import useStyles from '/home/eldar/Desktop/memories_project/memories_project/client/src/style.js';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    //fetching the data in this component, after all that Redux data swapping
    const posts = useSelector((state) => state.posts);//we again initialize it as a hook, as a parametar in callback function,
    //we get acces to that whole global redux store or state and then we can immediately return state.posts (posts is that reducer)
    const classes = useStyles();

    console.log(posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;