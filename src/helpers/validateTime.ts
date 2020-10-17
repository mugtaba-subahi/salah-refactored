export default (time: string): boolean => {
  const militaryTimeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (typeof time !== 'string') return false;
  else if (!time.match(militaryTimeRegex)) return false;
  else return true;
};
