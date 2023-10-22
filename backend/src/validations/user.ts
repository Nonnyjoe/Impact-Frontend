import Joi from 'joi';
import joiDate from '@joi/date';

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
};

export default user;
