export default (time: string): number => {
  const militaryTimeRegex = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
  if (typeof time !== 'string' || !time.match(militaryTimeRegex)) throw { message: 'Invalid time format' };

  const [hour, minute] = time.split(':');

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);
  now.setSeconds(0);

  return now.getTime();
};
