import convertTime from 'convert-time';
import validateTimeHelper from '../helpers/validateTime';

export default (name: string, time: string): string => {
  const isValidTime: boolean = validateTimeHelper(time);
  if (!isValidTime) throw { error: true, message: 'Invalid time' };

  if (name === 'Dhuhr') {
    const [dhuhr_hour] = time.split(':');

    // check if dhuhr is in afternoon or morning. 5(pm)
    if (+dhuhr_hour < 5) return convertTime(`${time} PM`, 'hh:MM');
  }

  const pmPrayers: string[] = ['Asr', 'Magrib', 'Isha'];
  if (pmPrayers.indexOf(name) !== -1) return convertTime(`${time} PM`, 'hh:MM');

  return time;
};
