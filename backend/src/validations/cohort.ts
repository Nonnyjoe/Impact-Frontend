import Joi from 'joi';
import joiDate from '@joi/date';
import { cohortList } from '../service';

const joi = Joi.extend(joiDate);

const cohort = {
  async validateCreateCohort(payload: any) {
    const schema = joi.object({
      name: joi
        .string()
        .valid(...cohortList)
        .required()
        .label('Cohort ID is required'),
      startDate: joi
        .date()
        .format('YYYY-MM-DD')
        .required()
        .label('Cohort start date is required. Format should be YYYY-MM-DD'),
      endDate: joi
        .date()
        .format('YYYY-MM-DD')
        .required()
        .label('Cohort end date is required. Format should be YYYY-MM-DD'),
    });
    const { error } = schema.validate(payload);
    if (error) throw error.details[0].context.label;
    return true;
  },
};

export default cohort;
