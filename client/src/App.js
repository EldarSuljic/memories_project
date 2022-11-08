import React, { useEffect } from 'react';
//importing all the components we are going to use in this App.js file
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from './style';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch(); //it is hook
    // now that we have acccess to this dispatch, we need to find a way where we are actually going to dispatch the action
    //the best way to do that inside of useEffect
    //useEffect is going to be the component that mount but later on its going to become the component we will update
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}></Grid>
                            <Posts />
                        <Grid item xs={12} sm={4}></Grid>
                            <Form />
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;