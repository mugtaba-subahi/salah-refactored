export default (time: string): number => {
  const [hour, minute] = time.split(':');

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);

  return now.valueOf();
};
