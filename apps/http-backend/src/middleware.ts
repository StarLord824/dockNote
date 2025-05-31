import jwt from 'jsonwebtoken';
import express from 'express';

const Middleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, 'secret');
  
  try {
    //@ts-ignore
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  console.log('Middleware');
  next();
}

export default Middleware;