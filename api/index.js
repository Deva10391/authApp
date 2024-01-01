import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './route/user.route.js';
import authRoutes from './route/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const __dirname = path.resolve();
// mechanism to locate the directory

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));
// find our build/dist folder (anywhere it may be)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
// once in client, client/dist/index.html is sent to the client

app.use(express.json());
app.use(cookieParser());

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

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})