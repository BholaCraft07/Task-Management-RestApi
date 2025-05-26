import bycrypt from 'bcrypt';
import { User } from '../models/user.model.js';

export const registerUser = async (username, password) => {
    const hashedPassword = await bycrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return user;
}

export const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !await bycrypt.compare(password, user.password)) {
        throw new Error('Invalid username or password');
    }
    return user;
}