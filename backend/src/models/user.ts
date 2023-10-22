import { mongoose, Validator } from './imports';

const { isEmail } = Validator;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please include username'],
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      validate: [isEmail, 'Please add a valid email address'],
      sparse: true,
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
    emailToken: {
      type: String,
      required: [false, 'Please include emailToken'],
    },
    image: String,
    role: {
      super: { type: Boolean, default: false },
      admin: { type: Boolean, default: false },
      user: { type: Boolean, default: true },
      student: { type: Boolean, default: false },
    },
    socialLinks: {
      twitter: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
    cohortId: {
      type: String,
      required: [true, 'Please include cohortId'],
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
