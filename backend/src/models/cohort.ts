import { mongoose } from './imports';

const CohortSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Cohort name is required'],
    },
    description: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: [true, 'Specify active status'],
    },
    startDate: {
      type: String,
      required: [true, 'Cohort start date is required'],
    },
    endDate: {
      type: String,
      required: [true, 'Cohort end date is required'],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export default mongoose.model('Cohort', CohortSchema);
