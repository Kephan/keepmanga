import express from 'express';
import bodyParser from 'body-parser'
import mysql from 'mysql';
import myconn from 'express-myconnection';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

import mangaRoutes from './routes/manga.js';

const app = express();
dotenv.config();

const dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

app.use(express.static(path.join(path.resolve(), 'public')));

app.use(morgan('tiny'))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
app.use(myconn(mysql, dbOptions, "single"))

app.use('/api', mangaRoutes);

app.get('/', (req, res) => {
    res.send("Manga API");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
