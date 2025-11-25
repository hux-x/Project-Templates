import type { Request } from 'express';
import type { Document } from 'mongoose';
interface IAuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}
interface IUser extends Document {
  fullName: string;
  email: string;
  profileImageURL?:string;
  age: number;
  password: string;
  phone: string;
  bloodType: string;
  role: "donor" | "recipient";
  city: string;
  lastDonation?: Date;
  eligible: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  status: string;
  location: [number, number];
  tileId: string;
}

export type { IAuthRequest, IUser };