// import express from 'express';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router: Router = Router();

router.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    bcrypt.compareSync(password, hashedPassword);
    
    res.status(200).send('Login successful');
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    const hashedToken = bcrypt.hashSync( password, saltRounds);

    res.status(200).send('Signup successful');
});

router.post('/createNotebook', (req, res) => {
    const {name, description} = req.body;
    // Here you would typically save the notebook to a database
    res.status(200).send('Notebook created successfully');
});
export default router;