import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;


// mongoose.connect('mongodb://localhost:27017/my-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const loginSchema = new mongoose.Schema({
  loginResponse: Object
  
});

export default mongoose.model('LoginData', loginSchema);