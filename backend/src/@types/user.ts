import { Document } from 'mongoose';

export interface UserInterface extends Document {
  firstName?: string;
  lastName?: string;
  username?: string;
  gender: 'male' | 'female';
  email?: string;
  isActive: boolean;
  address?: string;
  city?: string;
  state?: string;
  country: string;
  dob?: string;
  phoneNumber?: string;
  password?: string;
  image?: string;
  role: 'superAdmin' | 'admin' | 'student' | 'user';
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  cohortId?: string;
  about?: string;
  isBlocked: boolean;
  requestStatus?: 'pending' | 'approved' | 'rejected' | 'expired';
}

export type RegisterType = {
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  dob: string;
};
