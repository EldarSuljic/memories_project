import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express(); //ovo se radi sa svakom express app. inicijalizacija appa

app.use(bodyParser.json({ limit: "30mb", extended: true})); //ogranicenja neka tipa za slike kad se salju zahtjevi
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

