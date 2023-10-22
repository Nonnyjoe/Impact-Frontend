import { mongoose, Validator } from './imports';

const { isEmail } = Validator;

const PreboardSchema = new mongoose.Schema(
  {
    cohortId: {
      type: String,
      required: [true, 'Please include CohortId'],
    },
    email: {
      type: String,
      unique: true,
      validate: [isEmail, 'Please add a valid email address'],
      sparse: true,
    },
    isBlacklisted: {
      type: Boolean,
      default: false,
      required: [true, 'Please include isBlacklisted'],
    },
    hasOnboarded: {
      type: Boolean,
      default: false,
      required: [true, 'Please include hasOnboarded'],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export default mongoose.model('Preboard', PreboardSchema);
