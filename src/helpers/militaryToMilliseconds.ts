export default (time: string): number => {
  const [hour, minute] = time.split(':');

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);
  now.setSeconds(0);

  return now.getTime();
};
