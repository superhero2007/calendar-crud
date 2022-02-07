import moment from 'moment';

import {beautifyDate} from './beautifyDate';

export const eventTime = (events = [], start, end) => {
  const date = moment(start).format('YYYY-MM-DD');
  let range = {start: `${date} 12:00 AM`, end: `${date} 11:30 PM`};

  events.forEach(({start: eventStart, end: eventEnd}) => {
    if (moment(eventEnd).isBefore(moment(start), 'm') && moment(eventEnd).isAfter(moment(range.start), 'm')) {
      range.start = beautifyDate(eventEnd);
    }

    if (moment(eventStart).isAfter(moment(end), 'm') && moment(eventStart).isBefore(moment(range.end), 'm')) {
      range.end = beautifyDate(eventStart);
    }
  });

  return range;
};

export const getTimeRangeOptions = (start, end) => {
  if (!start || !end) return [];
  const options = [];
  const totalRangeMinutes = moment(end).diff(moment(start), 'm');

  new Array(totalRangeMinutes / 30 + 1).fill(0).forEach((_, index) => {
    options.push(
      {
        value: moment(start).add(30 * index, 'm').format('YYYY-MM-DD LT'),
        label: moment(start).add(30 * index, 'm').format('LT')
      }
    )
  });

  return options;
};