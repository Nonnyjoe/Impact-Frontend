import { mongoose, Validator } from './imports';

const { isEmail } = Validator;

const CohortSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      validate: [isEmail, 'Please add a valid email address'],
      sparse: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export default mongoose.model('Cohort', CohortSchema);
