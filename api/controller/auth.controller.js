import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

const hashedP = (password) => {
    const p = bcryptjs.hashSync(password, 10);
    return p;
}

export const signUp = async (req, res) => {
    const { username, email, password, gender } = req.body;
    const newUser = new User({ username, email, password: hashedP(password), gender });

    console.log(newUser);

    try {
        await newUser.save();
        res.status(201).json('user created successfully');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}