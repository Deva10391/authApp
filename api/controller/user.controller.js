import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

const hashedP = (password) => {
    const p = bcryptjs.hashSync(password, 10);
    return p;
}

export const updateUser = async (req, res, next) => {
    console.log('updating for:', req.user, ',', req.params);
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can update only your own account'));
    try {
        if (req.body.password) {
            req.body.password = hashedP(req.body.password);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true });
        const { password, ...rest } = updatedUser._doc;
        console.log('done:', rest);
        res.status(200).json(rest);
    } catch (err) {
        console.error(err);
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can delete only your own account'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json('User deleted');
    } catch (err) {
        next(err);
    }
}