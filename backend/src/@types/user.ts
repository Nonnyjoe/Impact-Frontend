import { Document } from 'mongoose';

// gender enum
export enum Gender {
  male = 'male',
  female = 'female',
  preferNotToSay = 'prefer not to say',
}
export interface UserInterface extends Document {
  firstname?: string;
  lastname?: string;
  username?: string;
  gender: Gender;
  email?: string;
  isActive: boolean;
  address?: string;
  city?: string;
  state?: string;
  country: string;
  dob?: string;
  phoneNumber?: string;
  emailToken?: string;
  image?: string;
  role: {
    super?: boolean;
    admin?: boolean;
    user?: boolean;
    student?: boolean;
  };
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
  email: string;
  username: string;
  cohortId: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: Gender;
  hasOnboarded?: boolean;
};
