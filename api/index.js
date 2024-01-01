import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

mongoose
    .connect(process.env.MONGO_URI || 'mongodb+srv://devashish15262:authP123@auth.jfurpdt.mongodb.net/authP123?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected')
    })
    .catch((err) => {
        console.error(err);
    });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} !`);
})