import Joi from 'joi';
import joiDate from '@joi/date';
import { cohortList } from '../service';

const joi = Joi.extend(joiDate);

const user = {
  async validateUserOnboarding(payload: any) {
    const schema = joi.object({
      email: joi.string().email().required().label('Email is required'),
    });
    const { error } = schema.validate(payload);
    if (error) throw error.details[0].context.label;
    return true;
  },
  async validateCreateUser(payload: any) {
    const schema = joi.object({
      cohortId: joi
        .string()
        .valid(...cohortList)
        .required()
        .label('Cohort ID is required. See admin for valid cohort IDs'),
      username: joi.string().required().label('Username is required'),
      firstname: joi.string().required().label('Firstname is required'),
      lastname: joi.string().required().label('Lastname is required'),
      email: joi.string().email().required().label('Email is required'),
      gender: joi
        .string()
        .valid('male', 'female', 'prefer not to say')
        .required()
        .label('Gender is required. Male, Female or Prefer not to say'),
      dob: joi
        .date()
        .format('YYYY-MM-DD')
        .allow('')
        .optional()
        .label('Date of birth is required. Format should be YYYY-MM-DD'),
    });
    const { error } = schema.validate(payload);
    if (error) throw error.details[0].context.label;
    return true;
  },
};

export default user;
