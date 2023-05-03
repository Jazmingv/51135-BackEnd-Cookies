import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    age: Number,
    password: {
        type: String,
        required: true
    }
});

const usersModel = mongoose.model("Users", userSchema);
export default usersModel;