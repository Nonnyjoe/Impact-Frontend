import Joi from 'joi';
import joiDate from '@joi/date';

const joi = Joi.extend(joiDate);

const user = {
  async validate(payload: any) {
    const schema = joi.object({
      accountNumber: joi
        .string()
        .max(10)
        .min(10)
        .regex(/^\d+$/)
        .optional()
        .label('invalid or missing account number'),
      phoneNumber: joi
        .string()
        .regex(/(^[0]\d{10}$)|(^[+]?[234]\d{12}$)/)
        .optional()
        .label('Invalid or missing phone number'),
      reason: joi.string().required().label('invalid or missing reason'),
    });
    const { error } = schema.validate(payload);
    if (error) throw error.details[0].context.label;
    return true;
  },
};

export default user;
