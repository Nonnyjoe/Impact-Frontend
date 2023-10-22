import { Document } from 'mongoose';

export interface OnboardInterface extends Document {
  cohortId: string;
  email: string;
  isBlacklisted: boolean;
}
