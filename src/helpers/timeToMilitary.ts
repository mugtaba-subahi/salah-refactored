import convertTime from 'convert-time';

export default (name: string, time: string): string => {
  if (name === 'Dhuhr') {
    const [dhuhr_hour] = time.split(':');

    // basically check if dhuhr is in afternoon or morning. 5(pm)
    if (parseInt(dhuhr_hour) < 5) return convertTime(`${time} PM`, 'hh:MM');
  }

  const pmPrayers: string[] = ['Asr', 'Magrib', 'Isha'];
  if (pmPrayers.indexOf(name) !== -1) return convertTime(`${time} PM`, 'hh:MM');

  return time;
};
