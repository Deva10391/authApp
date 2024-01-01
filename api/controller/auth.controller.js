import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken';

const hashedP = (password) => {
    const p = bcryptjs.hashSync(password, 10);
    return p;
}

export const signUp = async (req, res, next) => {
    const { username, email, password, gender } = req.body;
    const newUser = new User({ username, email, password: hashedP(password), gender });

    console.log(newUser);

    try {
        await newUser.save();
        res.status(201).json('user created successfully');
    } catch (err) {
        next(err);
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User Not Found !'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Invalid Credentials !'));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000);
        res
            .cookie('access_token', token, {
                httpOnly: true,
                expires: expiryDate,
            })
            .status(200)
            .json(rest);
    } catch (err) {
        next(err);
    }
};