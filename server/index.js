import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express(); //ovo se radi sa svakom express app. inicijalizacija appa

app.use(bodyParser.json({ limit: "30mb", extended: true})); //ogranicenja neka tipa za slike kad se salju zahtjevi
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://EldarSuljic:vedobrat6@cluster0.p7wu6mi.mongodb.net/?retryWrites=true&w=majority';
//napravio sam prethodno cloud database cluster mongodb
const PORT = process.env.PORT || 5000;

//za konekciju sa bazom podataka
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)) ) 
//ako je konekcija na bazu podataka uspjesna sta zelimo da se desi: da pozovemo nas app i onda na to zelimo da se uradi app.listen
.catch((error) => console.log(error.message));
//ako konekcija na bazu podataka nije uspjesna

//mongoose.set('useFindAndModify', false);
//ovo se pobrine da nema warninga u konzoli, al ova gore linije pravi gresku
