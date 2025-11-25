import jwt from 'jsonwebtoken';
import type { IAuthRequest } from "@customTypes/auth.ts";
import type { Response, NextFunction } from 'express';
const authMiddleware = (req:IAuthRequest, res:Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        console.log("JWT secret is not configured");
      return res.status(500).json({ message: 'Server configuration error' });
    }
    const decoded:any = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default authMiddleware;


