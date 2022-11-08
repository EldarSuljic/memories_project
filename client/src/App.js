import React from "react";
//importing all the components we are going to use in this App.js file
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from './style';

const App = () => {
    const classes = useStyles();

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