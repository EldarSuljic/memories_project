import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


//const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express(); //this is what we do with any express app, app initialization

//general setup
app.use(bodyParser.json({ limit: "30mb", extended: true})); //some limitations for example for images when requests are send
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors(corsOptions));
//now we can use express middleware to connect this to our application
app.use('/posts', postRoutes); //this means that every route in post routes is goint to start with /posts so localhost:5000/posts

const CONNECTION_URL = 'mongodb+srv://EldarSuljic:vedobrat6@cluster0.p7wu6mi.mongodb.net/?retryWrites=true&w=majority';
//previously I made a cloud database cluster, mongodb
const PORT = process.env.PORT || 5000;

//for connecion with dataBase
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)) )
//if connection on dataBase is succesfull: to call our app and then on it call app.listen
.catch((error) => console.log(error.message));
//if connection dataBase is unsuccesfull: just log error message

//mongoose.set('useFindAndModify', false);
//this one makes sure that there is no warnings, but this line doesnt work for me
