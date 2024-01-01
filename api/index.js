import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './route/user.route.js';
import authRoutes from './route/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json());

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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);