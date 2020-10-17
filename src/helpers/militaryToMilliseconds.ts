import validateTimeHelper from '../helpers/validateTime';

export default (time: string): number => {
  const isValidTime: boolean = validateTimeHelper(time);
  if (!isValidTime) throw { error: true, message: 'Invalid time' };

  const [hour, minute] = time.split(':');

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);
  now.setSeconds(0);

  return now.getTime();
};
