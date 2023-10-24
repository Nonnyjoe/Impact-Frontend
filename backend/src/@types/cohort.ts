import { Document } from 'mongoose';

export interface CohortInterface extends Document {
  alias?: number;
  numberOfStudents: number;
  isActive: boolean;
  description?: string;
  startDate: string;
  endDate: string;
}
