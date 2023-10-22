import { number } from 'joi';
import mongoose from 'mongoose';

const CohortSchema = new mongoose.Schema(
  {
    alias: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: [true, 'Specify active status'],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export default mongoose.model('Cohort', CohortSchema);
