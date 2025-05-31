import express from 'express';
import userRouter from './routes/user';
// import Middleware from './middleware';
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
// app.use(Middleware); // Custom middleware for authentication
app.use('/user', userRouter) // signin and signup

app.listen(3005, () => {
  console.log('Server is running on port 3000');
});

