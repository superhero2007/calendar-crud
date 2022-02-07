import moment from 'moment';

export const beautifyDate = (date) => {
  return moment(date).format('YYYY-MM-DD LT');
};