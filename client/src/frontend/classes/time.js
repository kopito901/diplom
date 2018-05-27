import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export function getCurrentRange() {
  let start = moment().startOf('week').format('MM/DD/YYYY'),
    end =  moment().endOf('week').format('MM/DD/YYYY'),
    range = moment.range(start, end);

  range.start.add(1, 'day');

  return range;
}

export function getRange(date) {
  date = moment(date, 'DD/MM/YY');
  let start = date.startOf('week').format('MM/DD/YYYY'),
    end = date.endOf('week').format('MM/DD/YYYY'),
    range = moment.range(start, end);

  range.start.add(1, 'day');

  return range;
}

export function setRange(dateArr) {
  let start = moment(dateArr[0], 'DD/MM/YY'),
    end = moment(dateArr[1], 'DD/MM/YY'),
    range = moment.range(start, end);

  return range;
}
