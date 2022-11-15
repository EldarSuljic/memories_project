import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
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
    //if not posts.length then show CircularProgress which is loading spinner, else :
    return (
        // !posts.length ? <CircularProgress /> : (
        //   <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        //     {posts.map((post) => (
        //       <Grid key={post._id} item xs={12} sm={6} md={6}>
        //         <Post post={post} />
        //       </Grid>
        //     ))}
        //   </Grid>
          //**OVAJ DIO KODA PRAVI ERROR, ALI VJEROVATNO OD RANIJE NIJE DOBRO POVEZANO IAKO SAM CIJELI VIDEO PRESAO PONOVO JER
          //OD STARTA NE HVATA NI ONAJ PRAZAN NIZ POSTOVA [] **/
          <h1>Eldar</h1>
        )
      //);
    };

export default Posts;