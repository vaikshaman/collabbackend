// db.js

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://utkarsh-verma:lhjekBEjnZxsUmhA@cluster0.zeqxbs3.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;

