import { mongoose, Validator } from './imports';

const { isEmail } = Validator;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please include username'],
      trim: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      validate: [isEmail, 'Please add a valid email address'],
      sparse: true,
      lowercase: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: [true, 'Please include isActive'],
    },
    address: String,
    city: String,
    state: String,
    country: {
      type: String,
      default: 'NG',
    },
    dob: String,
    phoneNumber: {
      type: String,
      match: [/\d{10}$/, 'Please include valid phone number'],
    },
    password: {
      type: String,
      required: [true, 'Please include password'],
    },
    image: String,
    role: {
      super: { type: Boolean, default: false },
      admin: { type: Boolean, default: false },
      user: { type: Boolean, default: true },
      student: { type: Boolean, default: false },
    },
    socialLinks: {
      twitter: { type: String, lowercase: true, trim: true },
      linkedin: { type: String, lowercase: true, trim: true },
      github: { String, lowercase: true, trim: true },
    },
    cohortId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cohort',
    },
    about: String,
    isBlocked: {
      type: Boolean,
      default: false,
    },
    requestStatus: {
      type: String,
      enum: ['rejected', 'approved', 'pending', 'expired'],
      default: 'pending',
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

export default mongoose.model('User', UserSchema);
